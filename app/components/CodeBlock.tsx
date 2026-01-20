'use client';

import { useState } from 'react';
import { Terminal, AnimatedSpan } from '@/components/ui/terminal';
import {
  getCodeSnippet,
  type CodeFormat,
  type EndpointType,
} from '@/app/utils/codeSnippets';

interface CodeBlockProps {
  language?: string;
  code?: string;
  filename?: string;
  showFormatDropdown?: boolean;
  endpoint?: EndpointType;
}

export default function CodeBlock({
  language = 'bash',
  code,
  filename,
  showFormatDropdown = true,
  endpoint,
}: CodeBlockProps) {
  const [selectedFormat, setSelectedFormat] = useState<CodeFormat>('curl');

  // If endpoint is provided, use code snippets; otherwise use provided code
  const displayCode = endpoint
    ? getCodeSnippet(endpoint, selectedFormat)
    : code || '';

  // Split code into lines, preserving empty lines
  const codeLines = displayCode.split('\n');

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
      >
        {codeLines.map((line, index) => (
          <AnimatedSpan
            key={index}
            delay={0}
            className="block font-mono text-sm whitespace-pre"
            startOnView={false}
          >
            {line || '\u00A0'}
          </AnimatedSpan>
        ))}
      </Terminal>
    </div>
  );
}
