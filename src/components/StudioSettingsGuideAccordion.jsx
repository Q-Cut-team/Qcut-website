import React, { useMemo, useState } from 'react';
import Reveal from './Reveal';
import studioSettingsGuideMarkdown from '../content/studio-settings-guide.md?raw';

const sectionCardStyle = {
  background: 'linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015))',
  borderColor: 'var(--line-2)',
};

const tableWrapStyle = {
  overflowX: 'auto',
  margin: '14px 0 4px',
  border: '1px solid var(--line)',
  borderRadius: 10,
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  minWidth: 560,
};

const tableHeadCellStyle = {
  padding: '12px 14px',
  textAlign: 'left',
  color: 'var(--text)',
  background: 'rgba(255,255,255,0.035)',
  borderBottom: '1px solid var(--line)',
  verticalAlign: 'top',
};

const tableCellStyle = {
  padding: '12px 14px',
  borderTop: '1px solid var(--line)',
  color: 'var(--text-2)',
  verticalAlign: 'top',
};

function stripFrontmatter(markdown) {
  if (!markdown.startsWith('---')) {
    return markdown.trim();
  }

  const endIndex = markdown.indexOf('\n---', 3);
  if (endIndex === -1) {
    return markdown.trim();
  }

  return markdown.slice(endIndex + 4).trim();
}

function isTableSeparator(cells) {
  return cells.every((cell) => /^:?-{3,}:?$/.test(cell.trim()));
}

function parseTableRow(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim());
}

function parseBlocks(lines) {
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push({ type: 'h3', text: line.replace(/^### /, '') });
      index += 1;
      continue;
    }

    if (line.trim().startsWith('|')) {
      const tableLines = [];
      while (index < lines.length && lines[index].trim().startsWith('|')) {
        tableLines.push(lines[index]);
        index += 1;
      }

      const rows = tableLines.map(parseTableRow).filter((row) => !isTableSeparator(row));
      if (rows.length > 0) {
        blocks.push({
          type: 'table',
          header: rows[0],
          rows: rows.slice(1),
        });
      }
      continue;
    }

    const paragraphLines = [];
    while (
      index < lines.length
      && lines[index].trim()
      && !lines[index].startsWith('### ')
      && !lines[index].trim().startsWith('|')
    ) {
      paragraphLines.push(lines[index]);
      index += 1;
    }

    blocks.push({ type: 'paragraph', text: paragraphLines.join(' ') });
  }

  return blocks;
}

function parseGuideMarkdown(markdown) {
  const lines = stripFrontmatter(markdown).split('\n');
  const introLines = [];
  const sections = [];
  let title = '';
  let currentSection = null;

  lines.forEach((line) => {
    if (line.startsWith('# ')) {
      title = line.replace(/^# /, '');
      return;
    }

    if (line.startsWith('## ')) {
      currentSection = { title: line.replace(/^## /, ''), lines: [] };
      sections.push(currentSection);
      return;
    }

    if (currentSection) {
      currentSection.lines.push(line);
      return;
    }

    introLines.push(line);
  });

  return {
    title,
    introBlocks: parseBlocks(introLines),
    sections: sections.map((section) => ({
      title: section.title,
      blocks: parseBlocks(section.lines),
    })),
  };
}

function renderInlineText(text, keyPrefix) {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={key}
          style={{
            color: 'var(--amber)',
            background: 'rgba(255,178,56,0.08)',
            border: '1px solid rgba(255,178,56,0.16)',
            borderRadius: 5,
            padding: '1px 5px',
            fontFamily: 'var(--mono)',
            fontSize: '0.92em',
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key} style={{ color: 'var(--text)' }}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

function renderBlock(block, index) {
  if (block.type === 'h3') {
    return (
      <h4
        key={`heading-${index}`}
        className="t-h3"
        style={{ marginTop: index === 0 ? 0 : 22, marginBottom: 8 }}
      >
        {block.text}
      </h4>
    );
  }

  if (block.type === 'table') {
    return (
      <div key={`table-${index}`} style={tableWrapStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              {block.header.map((cell, cellIndex) => (
                <th key={`header-${cellIndex}`} className="t-label" style={tableHeadCellStyle}>
                  {renderInlineText(cell, `table-${index}-header-${cellIndex}`)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`cell-${cellIndex}`} className="t-body" style={tableCellStyle}>
                    {renderInlineText(cell, `table-${index}-row-${rowIndex}-cell-${cellIndex}`)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <p key={`paragraph-${index}`} className="t-body" style={{ marginTop: index === 0 ? 0 : 12 }}>
      {renderInlineText(block.text, `paragraph-${index}`)}
    </p>
  );
}

function StudioSettingsGuideAccordion() {
  const guide = useMemo(() => parseGuideMarkdown(studioSettingsGuideMarkdown), []);
  const [openSection, setOpenSection] = useState(0);

  const toggleSection = (sectionIndex) => {
    setOpenSection((currentSection) => (currentSection === sectionIndex ? -1 : sectionIndex));
  };

  return (
    <Reveal as="section" className="container" style={{ paddingTop: 24, paddingBottom: 72 }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 className="t-h2">{guide.title}</h2>
        <div style={{ maxWidth: 820, margin: '18px auto 0', display: 'grid', gap: 12 }}>
          {guide.introBlocks.map((block, index) => renderBlock(block, index))}
        </div>
      </div>

      <div style={{ display: 'grid', gap: 14, maxWidth: 980, margin: '0 auto' }}>
        {guide.sections.map((section, sectionIndex) => {
          const isOpen = openSection === sectionIndex;
          const sectionId = `studio-settings-guide-${sectionIndex}`;

          return (
            <article
              key={section.title}
              className="card"
              style={isOpen ? sectionCardStyle : undefined}
            >
              <button
                type="button"
                onClick={() => toggleSection(sectionIndex)}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  padding: 0,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 18,
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
                aria-expanded={isOpen}
                aria-controls={sectionId}
              >
                <h3 className="t-h3">{section.title}</h3>
                <span
                  style={{
                    flex: '0 0 auto',
                    width: 30,
                    height: 30,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                    border: '1px solid rgba(255,178,56,0.24)',
                    color: 'var(--amber)',
                    background: isOpen ? 'rgba(255,178,56,0.09)' : 'transparent',
                    fontSize: 22,
                    lineHeight: 1,
                  }}
                >
                  {isOpen ? '-' : '+'}
                </span>
              </button>

              {isOpen ? (
                <div
                  id={sectionId}
                  style={{
                    marginTop: 18,
                    paddingTop: 18,
                    borderTop: '1px solid var(--line)',
                  }}
                >
                  {section.blocks.map((block, index) => renderBlock(block, index))}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </Reveal>
  );
}

export default StudioSettingsGuideAccordion;
