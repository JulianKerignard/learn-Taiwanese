"use client";

import AudioButton from "./AudioButton";
import type { CourseSection, ContentBlock } from "@/types/course";
import { cn } from "@/lib/cn";

interface CourseContentProps {
  sections: CourseSection[];
  className?: string;
}

const sectionIcons: Record<CourseSection["type"], string> = {
  theory: "📖",
  grammar: "📝",
  culture: "🏮",
  practice: "✏️",
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
      {block.chinese && (
        <div className="flex items-center gap-2 mb-1">
          <span className="chinese text-2xl text-stone-900">{block.chinese}</span>
          <AudioButton text={block.chinese} size="sm" />
        </div>
      )}
      {block.pinyin && (
        <p className="text-sm italic text-stone-500 mb-1">{block.pinyin}</p>
      )}
      {block.translation && (
        <p className="text-sm italic text-stone-600">{block.translation}</p>
      )}
      {block.content && (
        <p className="mt-2 text-sm text-stone-500">
          {parseInlineFormatting(block.content)}
        </p>
      )}
    </div>
  );
}

function WarningBlock({ block }: { block: ContentBlock }) {
  return (
    <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
      <div className="flex items-center gap-2 mb-2">
        <span>⚠️</span>
        <span className="font-semibold text-orange-800">Attention</span>
      </div>
      <p className="text-sm text-orange-700 leading-relaxed">
        {parseInlineFormatting(block.content)}
      </p>
    </div>
  );
}

function TipBlock({ block }: { block: ContentBlock }) {
  return (
    <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
      <div className="flex items-center gap-2 mb-2">
        <span>💡</span>
        <span className="font-semibold text-teal-800">Astuce</span>
      </div>
      <p className="text-sm text-teal-700 leading-relaxed">
        {parseInlineFormatting(block.content)}
      </p>
    </div>
  );
}

function ComparisonBlock({ block }: { block: ContentBlock }) {
  // If chinese field is provided, use content=FR and chinese=ZH
  if (block.chinese) {
    return (
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-blue-50 p-4">
          <p className="mb-1 text-xs font-semibold uppercase text-blue-400">Français</p>
          <p className="text-sm text-blue-800 leading-relaxed whitespace-pre-line">
            {parseInlineFormatting(block.content)}
          </p>
        </div>
        <div className="rounded-lg bg-rose-50 p-4">
          <p className="mb-1 text-xs font-semibold uppercase text-rose-400">Chinois</p>
          <p className="text-sm text-rose-800 leading-relaxed chinese whitespace-pre-line">
            {parseInlineFormatting(block.chinese)}
          </p>
        </div>
      </div>
    );
  }

  // Fallback: single block with full content (no forced split)
  return (
    <div className="rounded-lg border border-indigo-200 bg-indigo-50/50 p-4">
      <p className="mb-1 text-xs font-semibold uppercase text-indigo-400">Comparaison</p>
      <p className="text-sm text-indigo-800 leading-relaxed whitespace-pre-line">
        {parseInlineFormatting(block.content)}
      </p>
    </div>
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
      {sections.map((section, i) => (
        <div key={i}>
          {i > 0 && <hr className="mb-8 border-stone-200" />}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">{sectionIcons[section.type]}</span>
            <h3 className="text-lg font-semibold text-stone-800">{section.title}</h3>
          </div>
          <div className="flex flex-col gap-4 pl-1">
            {section.content.map((block, j) => (
              <ContentBlockRenderer key={j} block={block} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
