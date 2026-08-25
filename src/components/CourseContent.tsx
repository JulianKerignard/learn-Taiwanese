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

/**
 * Three visual roles, not five. The five block types stay as they are in the
 * data; what they share is a role, and each role is one semantic token pair:
 * the tint is the ground, the -ink is the only colour allowed on it.
 */
type BlockRole = "info" | "caution" | "example";

const roleStyles: Record<BlockRole, { box: string; label: string }> = {
  info: { box: "border-accent/25 bg-accent/10", label: "text-accent-ink" },
  caution: { box: "border-warning/30 bg-warning/10", label: "text-warning-ink" },
  example: { box: "border-success/25 bg-success/10", label: "text-success-ink" },
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

function Callout({
  role,
  icon,
  label,
  children,
}: {
  role: BlockRole;
  icon: string;
  label: string;
  children: React.ReactNode;
}) {
  const style = roleStyles[role];
  return (
    <div className={cn("rounded-lg border p-4", style.box)}>
      <p className={cn("mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide", style.label)}>
        <span aria-hidden>{icon}</span>
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
    <Callout role="example" icon="◆" label="Exemple">
      {block.chinese && (
        <div className="flex items-center gap-2 mb-1">
          <span className="chinese text-2xl text-stone-900" lang="zh-Hant-TW">{block.chinese}</span>
          <AudioButton text={block.chinese} size="sm" />
        </div>
      )}
      {block.pinyin && (
        <p className="text-sm italic text-stone-600 mb-1">{block.pinyin}</p>
      )}
      {block.translation && (
        <p className="text-sm italic text-stone-700">{block.translation}</p>
      )}
      {block.content && (
        <p className="mt-2 text-sm text-stone-700">
          {parseInlineFormatting(block.content)}
        </p>
      )}
    </Callout>
  );
}

function WarningBlock({ block }: { block: ContentBlock }) {
  return (
    <Callout role="caution" icon="⚠️" label="Attention">
      <p className="text-sm text-stone-700 leading-relaxed">
        {parseInlineFormatting(block.content)}
      </p>
    </Callout>
  );
}

function TipBlock({ block }: { block: ContentBlock }) {
  return (
    <Callout role="info" icon="💡" label="Astuce">
      <p className="text-sm text-stone-700 leading-relaxed">
        {parseInlineFormatting(block.content)}
      </p>
    </Callout>
  );
}

function ComparisonBlock({ block }: { block: ContentBlock }) {
  // With a chinese field the block is a two-column contrast: content=FR, chinese=ZH.
  return (
    <Callout role="info" icon="⇄" label="Comparaison">
      {block.chinese ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-accent-ink">Français</p>
            <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
              {parseInlineFormatting(block.content)}
            </p>
          </div>
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-wide text-accent-ink">Chinois</p>
            <p
              className="chinese text-sm text-stone-700 leading-relaxed whitespace-pre-line"
              lang="zh-Hant-TW"
            >
              {parseInlineFormatting(block.chinese)}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-line">
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
      {sections.map((section, i) => (
        <div key={i}>
          {i > 0 && <hr className="mb-8 border-stone-200" />}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xl">{sectionIcons[section.type]}</span>
            <h3 className="text-subtitle font-bold text-stone-800">{section.title}</h3>
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
