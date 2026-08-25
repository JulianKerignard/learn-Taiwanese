"use client";

import { BookOpen, Landmark, Lightbulb, PenLine, Scale, SquarePen, TriangleAlert } from "lucide-react";
import AudioButton from "./AudioButton";
import type { CourseSection, ContentBlock } from "@/types/course";
import { cn } from "@/lib/cn";

interface CourseContentProps {
  sections: CourseSection[];
  className?: string;
}

const sectionIcons: Record<CourseSection["type"], typeof BookOpen> = {
  theory: BookOpen,
  grammar: SquarePen,
  culture: Landmark,
  practice: PenLine,
};

function parseInlineFormatting(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      parts.push(<strong key={match.index}>{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(<em key={match.index}>{match[3]}</em>);
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : [text];
}

/**
 * Three roles, and only three: warning, tip, comparison. Each is the same shape
 * — a left rule in a semantic token, a labelled icon, body copy in stone — so
 * the reader learns the vocabulary once. The blocks used to reach for six raw
 * Tailwind ramps (orange, teal, blue, rose, indigo), several of which failed
 * 4.5:1: text-blue-400 on bg-blue-50 measured 2.42:1.
 */
const ROLES = {
  warning: { border: "border-l-warning", text: "text-warning", icon: TriangleAlert },
  tip: { border: "border-l-success", text: "text-success", icon: Lightbulb },
  comparison: { border: "border-l-accent", text: "text-accent", icon: Scale },
} as const;

function Callout({
  role,
  label,
  children,
}: {
  role: keyof typeof ROLES;
  label: string;
  children: React.ReactNode;
}) {
  const { border, text, icon: Icon } = ROLES[role];
  return (
    <div className={cn("rounded-lg border border-stone-200 border-l-4 bg-stone-50 p-4", border)}>
      <p className={cn("mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide", text)}>
        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
        {label}
      </p>
      {children}
    </div>
  );
}

function TextBlock({ block }: { block: ContentBlock }) {
  return (
    <p className="text-stone-700 leading-relaxed">
      {parseInlineFormatting(block.content)}
    </p>
  );
}

function ExampleBlock({ block }: { block: ContentBlock }) {
  return (
    <div className="rounded-lg border border-stone-200 bg-stone-50 p-4">
      {block.japanese && (
        <div className="flex items-center gap-2 mb-1">
          <span className="japanese text-2xl text-stone-900" lang="ja">
            {block.japanese}
          </span>
          <AudioButton text={block.japanese} size="sm" />
        </div>
      )}
      {block.romaji && (
        <p className="text-sm italic text-stone-500 mb-1">{block.romaji}</p>
      )}
      {block.translation && (
        <p className="text-sm italic text-stone-600">{block.translation}</p>
      )}
      {block.content && (
        <p className="mt-2 text-sm text-stone-600">
          {parseInlineFormatting(block.content)}
        </p>
      )}
    </div>
  );
}

function WarningBlock({ block }: { block: ContentBlock }) {
  return (
    <Callout role="warning" label="Attention">
      <p className="text-sm leading-relaxed text-stone-700">
        {parseInlineFormatting(block.content)}
      </p>
    </Callout>
  );
}

function TipBlock({ block }: { block: ContentBlock }) {
  return (
    <Callout role="tip" label="Astuce">
      <p className="text-sm leading-relaxed text-stone-700">
        {parseInlineFormatting(block.content)}
      </p>
    </Callout>
  );
}

function ComparisonBlock({ block }: { block: ContentBlock }) {
  // With a japanese field, content is the French side and japanese the Japanese one.
  return (
    <Callout role="comparison" label="Comparaison">
      {block.japanese ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-stone-500">
              Français
            </p>
            <p className="text-sm leading-relaxed whitespace-pre-line text-stone-700">
              {parseInlineFormatting(block.content)}
            </p>
          </div>
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-stone-500">
              Japonais
            </p>
            <p className="japanese text-sm leading-relaxed whitespace-pre-line text-stone-700" lang="ja">
              {parseInlineFormatting(block.japanese)}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-sm leading-relaxed whitespace-pre-line text-stone-700">
          {parseInlineFormatting(block.content)}
        </p>
      )}
    </Callout>
  );
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "text":
      return <TextBlock block={block} />;
    case "example":
      return <ExampleBlock block={block} />;
    case "warning":
      return <WarningBlock block={block} />;
    case "tip":
      return <TipBlock block={block} />;
    case "comparison":
      return <ComparisonBlock block={block} />;
    default:
      return null;
  }
}

export default function CourseContent({ sections, className }: CourseContentProps) {
  return (
    <div className={cn("flex flex-col gap-8", className)}>
      {sections.map((section, i) => {
        const Icon = sectionIcons[section.type];
        return (
          <div key={i}>
            {i > 0 && <hr className="mb-8 border-stone-200" />}
            <div className="flex items-center gap-2 mb-4">
              <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <h3 className="card-title">{section.title}</h3>
            </div>
            <div className="flex flex-col gap-4 pl-1">
              {section.content.map((block, j) => (
                <ContentBlockRenderer key={j} block={block} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
