'use client';

import { useState } from 'react';
import { Terminal, AnimatedSpan } from '@/components/ui/terminal';
import {
  getCodeSnippet,
  type CodeFormat,
  type EndpointType,
} from '@/app/utils/codeSnippets';
import { highlightCode } from '@/app/utils/syntaxHighlight';

interface CodeBlockProps {
  language?: string;
  code?: string;
  filename?: string;
  showFormatDropdown?: boolean;
  endpoint?: EndpointType;
  showStatus?: boolean;
  statusCode?: string;
}

export default function CodeBlock({
  language = 'bash',
  code,
  filename,
  showFormatDropdown = true,
  endpoint,
  showStatus = false,
  statusCode = '200',
}: CodeBlockProps) {
  const [selectedFormat, setSelectedFormat] = useState<CodeFormat>('curl');

  // If endpoint is provided, use code snippets; otherwise use provided code
  const displayCode = endpoint
    ? getCodeSnippet(endpoint, selectedFormat)
    : code || '';

  // Get the format for syntax highlighting
  const getHighlightFormat = () => {
    if (endpoint) return selectedFormat;
    if (language === 'bash') return 'curl';
    if (language === 'jsx' || language === 'react' || language === 'react-native' || language === 'typescript' || language === 'ts' || language === 'tsx') return 'javascript';
    return language as CodeFormat;
  };
  const highlightFormat = getHighlightFormat();

  // Highlight the code
  const highlightedCode = highlightCode(displayCode, highlightFormat);

  return (
    <div className="my-6">
      {filename && (
        <div className="mb-2 text-xs font-medium text-gray-400">
          {filename}
        </div>
      )}
      <Terminal
        className="w-full"
        sequence={false}
        startOnView={false}
        copyContent={displayCode}
        selectedFormat={selectedFormat}
        onFormatChange={setSelectedFormat}
        showFormatDropdown={showFormatDropdown && !!endpoint}
        showStatus={showStatus}
        statusCode={statusCode}
      >
        {highlightedCode.map((line, index) => (
          <AnimatedSpan
            key={index}
            delay={0}
            startOnView={false}
          >
            {line}
          </AnimatedSpan>
        ))}
      </Terminal>
    </div>
  );
}
