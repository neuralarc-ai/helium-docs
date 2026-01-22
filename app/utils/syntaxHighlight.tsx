import React from 'react';

type CodeFormat = 'curl' | 'javascript' | 'python' | 'java' | 'php' | 'json';

interface Token {
  text: string;
  type: 'keyword' | 'string' | 'comment' | 'url' | 'header' | 'method' | 'number' | 'variable' | 'operator' | 'text';
}

// Terminal color scheme - Modern dark theme
const colors = {
  keyword: '#E5C07B', // Muted yellow - flags (-X, -H, -F) / JSON numbers
  string: '#ABB2BF', // Subtle syntax - quotes / JSON brackets/colons/commas
  comment: '#5C6370', // Dim structural - backslash / JSON ellipsis
  url: '#FFFFFF', // White - JSON keys / curl URLs
  header: '#98C379', // Natural green - header names / JSON string values & booleans
  method: '#E5E513', // Warm yellow - HTTP methods (POST)
  number: '#E6E6E6', // Neutral foreground - header values/API keys
  variable: '#5FD7FF', // Soft cyan - commands (curl)
  operator: '#0FBC7A', // Teal green - general code text
  text: '#0FBC7A', // Teal green - default text color
};

function highlightLine(line: string, format: CodeFormat): Token[] {
  const tokens: Token[] = [];
  
  if (!line.trim()) {
    return [{ text: line, type: 'text' }];
  }

  // Curl highlighting
  if (format === 'curl') {
    let remaining = line;
    let pos = 0;

    while (pos < remaining.length) {
      // Commands (curl)
      const commandMatch = remaining.slice(pos).match(/^curl\b/);
      if (commandMatch) {
        tokens.push({ text: commandMatch[0], type: 'variable' }); // curl command
        pos += commandMatch[0].length;
        continue;
      }

      // HTTP methods (GET, POST, PUT, DELETE, PATCH)
      const methodMatch = remaining.slice(pos).match(/^(GET|POST|PUT|DELETE|PATCH)\b/);
      if (methodMatch) {
        tokens.push({ text: methodMatch[0], type: 'method' });
        pos += methodMatch[0].length;
        continue;
      }

      // Flags (-X, -H, -F, etc.)
      const flagMatch = remaining.slice(pos).match(/^(-\w+)/);
      if (flagMatch) {
        tokens.push({ text: flagMatch[0], type: 'keyword' });
        pos += flagMatch[0].length;
        continue;
      }

      // URLs
      const urlMatch = remaining.slice(pos).match(/^(https?:\/\/[^\s"']+)/);
      if (urlMatch) {
        tokens.push({ text: urlMatch[0], type: 'url' });
        pos += urlMatch[0].length;
        continue;
      }

      // Header names (X-API-Key:, Content-Type:, etc.)
      const headerMatch = remaining.slice(pos).match(/^([A-Z][A-Za-z-]+:)/);
      if (headerMatch) {
        tokens.push({ text: headerMatch[0], type: 'header' });
        pos += headerMatch[0].length;
        continue;
      }

      // Quotes
      const quoteMatch = remaining.slice(pos).match(/^["']/);
      if (quoteMatch) {
        tokens.push({ text: quoteMatch[0], type: 'string' });
        pos += quoteMatch[0].length;
        continue;
      }

      // Backslashes
      const backslashMatch = remaining.slice(pos).match(/^\\$/);
      if (backslashMatch) {
        tokens.push({ text: backslashMatch[0], type: 'comment' });
        pos += backslashMatch[0].length;
        continue;
      }

      // Variables ($VAR, ${VAR})
      const varMatch = remaining.slice(pos).match(/^(\$\w+|\$\{[^}]+\})/);
      if (varMatch) {
        tokens.push({ text: varMatch[0], type: 'number' }); // API keys/values
        pos += varMatch[0].length;
        continue;
      }

      // Regular text
      const nextChar = remaining[pos];
      tokens.push({ text: nextChar, type: 'operator' }); // Use operator color for general code
      pos++;
    }
  }
  // JavaScript highlighting
  else if (format === 'javascript') {
    let remaining = line;
    let pos = 0;

    while (pos < remaining.length) {
      // Keywords
      const keywordMatch = remaining.slice(pos).match(/^(import|export|const|let|var|function|async|await|from|default|return|if|else|for|while|new|class|extends|implements|interface|type|enum)\b/);
      if (keywordMatch) {
        tokens.push({ text: keywordMatch[0], type: 'keyword' });
        pos += keywordMatch[0].length;
        continue;
      }

      // Strings
      const stringMatch = remaining.slice(pos).match(/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/);
      if (stringMatch) {
        tokens.push({ text: stringMatch[0], type: 'string' });
        pos += stringMatch[0].length;
        continue;
      }

      // Comments
      const commentMatch = remaining.slice(pos).match(/^(\/\/.*|\/\*[\s\S]*?\*\/)/);
      if (commentMatch) {
        tokens.push({ text: commentMatch[0], type: 'comment' });
        pos += commentMatch[0].length;
        continue;
      }

      // Numbers
      const numberMatch = remaining.slice(pos).match(/^(\d+\.?\d*)/);
      if (numberMatch) {
        tokens.push({ text: numberMatch[0], type: 'number' });
        pos += numberMatch[0].length;
        continue;
      }

      // Regular text
      const nextChar = remaining[pos];
      tokens.push({ text: nextChar, type: 'operator' }); // Use operator color for general code
      pos++;
    }
  }
  // Python highlighting
  else if (format === 'python') {
    let remaining = line;
    let pos = 0;

    while (pos < remaining.length) {
      // Keywords
      const keywordMatch = remaining.slice(pos).match(/^(import|from|def|class|if|else|elif|for|while|try|except|finally|with|as|return|yield|lambda|and|or|not|in|is|None|True|False)\b/);
      if (keywordMatch) {
        tokens.push({ text: keywordMatch[0], type: 'keyword' });
        pos += keywordMatch[0].length;
        continue;
      }

      // Strings
      const stringMatch = remaining.slice(pos).match(/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|"""(?:[^"]|"(?!""))*"""|'''(?:[^']|'(?!''))*''')/);
      if (stringMatch) {
        tokens.push({ text: stringMatch[0], type: 'string' });
        pos += stringMatch[0].length;
        continue;
      }

      // Comments
      const commentMatch = remaining.slice(pos).match(/^(#.*)/);
      if (commentMatch) {
        tokens.push({ text: commentMatch[0], type: 'comment' });
        pos += commentMatch[0].length;
        continue;
      }

      // Numbers
      const numberMatch = remaining.slice(pos).match(/^(\d+\.?\d*)/);
      if (numberMatch) {
        tokens.push({ text: numberMatch[0], type: 'number' });
        pos += numberMatch[0].length;
        continue;
      }

      // Regular text
      const nextChar = remaining[pos];
      tokens.push({ text: nextChar, type: 'operator' }); // Use operator color for general code
      pos++;
    }
  }
  // Java highlighting
  else if (format === 'java') {
    let remaining = line;
    let pos = 0;

    while (pos < remaining.length) {
      // Keywords
      const keywordMatch = remaining.slice(pos).match(/^(import|package|public|private|protected|static|class|interface|extends|implements|void|int|String|boolean|if|else|for|while|try|catch|finally|return|new|this|super)\b/);
      if (keywordMatch) {
        tokens.push({ text: keywordMatch[0], type: 'keyword' });
        pos += keywordMatch[0].length;
        continue;
      }

      // Strings
      const stringMatch = remaining.slice(pos).match(/^("(?:[^"\\]|\\.)*")/);
      if (stringMatch) {
        tokens.push({ text: stringMatch[0], type: 'string' });
        pos += stringMatch[0].length;
        continue;
      }

      // Comments
      const commentMatch = remaining.slice(pos).match(/^(\/\/.*|\/\*[\s\S]*?\*\/)/);
      if (commentMatch) {
        tokens.push({ text: commentMatch[0], type: 'comment' });
        pos += commentMatch[0].length;
        continue;
      }

      // Numbers
      const numberMatch = remaining.slice(pos).match(/^(\d+\.?\d*)/);
      if (numberMatch) {
        tokens.push({ text: numberMatch[0], type: 'number' });
        pos += numberMatch[0].length;
        continue;
      }

      // Regular text
      const nextChar = remaining[pos];
      tokens.push({ text: nextChar, type: 'operator' }); // Use operator color for general code
      pos++;
    }
  }
  // PHP highlighting
  else if (format === 'php') {
    // Simplified PHP highlighting to prevent freezes
    // Use simple, safe patterns that won't cause backtracking
    
    // Check for comments first (rest of line)
    if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
      return [{ text: line, type: 'comment' }];
    }

    let remaining = line;
    let pos = 0;
    const maxPos = remaining.length;
    const maxIterations = maxPos * 3; // Safety limit
    let iterations = 0;

    while (pos < maxPos && iterations < maxIterations) {
      iterations++;
      const rest = remaining.slice(pos);
      
      // Skip whitespace
      const whitespaceMatch = rest.match(/^\s+/);
      if (whitespaceMatch) {
        tokens.push({ text: whitespaceMatch[0], type: 'text' });
        pos += whitespaceMatch[0].length;
        continue;
      }

      // Keywords (simple, non-backtracking patterns)
      const keywordMatch = rest.match(/^(<?php|function|class|foreach|elseif|return|echo|print|array|while|true|false|null|if|else|for)\b/);
      if (keywordMatch) {
        tokens.push({ text: keywordMatch[0], type: 'keyword' });
        pos += keywordMatch[0].length;
        continue;
      }

      // Variables ($var)
      const varMatch = rest.match(/^(\$\w+)/);
      if (varMatch) {
        tokens.push({ text: varMatch[0], type: 'variable' });
        pos += varMatch[0].length;
        continue;
      }

      // Simple string detection - find next quote and match to closing quote with escape handling
      // Limit string length to prevent issues
      if (rest[0] === '"' || rest[0] === "'") {
        const quote = rest[0];
        let stringEnd = 1;
        const maxStringLen = Math.min(500, maxPos - pos); // Limit string length
        let stringIterations = 0;
        const maxStringIterations = maxStringLen;
        
        while (stringEnd < maxStringLen && stringEnd < rest.length && stringIterations < maxStringIterations) {
          stringIterations++;
          if (rest[stringEnd] === '\\' && stringEnd + 1 < rest.length) {
            stringEnd += 2; // Skip escaped character
          } else if (rest[stringEnd] === quote) {
            stringEnd++;
            break;
          } else {
            stringEnd++;
          }
        }
        
        tokens.push({ 
          text: remaining.slice(pos, pos + stringEnd), 
          type: 'string' 
        });
        pos += stringEnd;
        continue;
      }

      // Numbers
      const numberMatch = rest.match(/^-?\d+(\.\d+)?/);
      if (numberMatch) {
        tokens.push({ text: numberMatch[0], type: 'number' });
        pos += numberMatch[0].length;
        continue;
      }

      // Operators and punctuation
      const opMatch = rest.match(/^([=+\-*/%<>!&|.,;:()[\]{}])/);
      if (opMatch) {
        tokens.push({ text: opMatch[0], type: 'operator' });
        pos += opMatch[0].length;
        continue;
      }

      // Default: single character as text
      tokens.push({ text: rest[0] || '', type: 'text' });
      pos++;
    }

    // Safety fallback: if we didn't process everything, add the rest as text
    if (pos < maxPos) {
      tokens.push({ text: remaining.slice(pos), type: 'text' });
    }
  }
  // JSON highlighting
  else if (format === 'json') {
    let remaining = line;
    let pos = 0;

    while (pos < remaining.length) {
      const char = remaining[pos];

      // Brackets { }
      if (char === '{' || char === '}') {
        tokens.push({ text: char, type: 'string' }); // Neutral color for brackets
        pos++;
        continue;
      }

      // Colons
      if (char === ':') {
        tokens.push({ text: char, type: 'string' }); // Neutral color for colons
        pos++;
        continue;
      }

      // Commas
      if (char === ',') {
        tokens.push({ text: char, type: 'string' }); // Neutral color for commas
        pos++;
        continue;
      }

      // Strings (JSON keys and values)
      if (char === '"') {
        // Find the end of the string
        let endPos = pos + 1;
        while (endPos < remaining.length && (remaining[endPos] !== '"' || remaining[endPos - 1] === '\\')) {
          endPos++;
        }
        if (endPos < remaining.length) {
          endPos++; // Include the closing quote
        }
        const stringContent = remaining.slice(pos, endPos);

        // Check if this string is followed by optional whitespace and a colon (making it a key)
        const remainingAfterString = remaining.slice(endPos);
        const isKey = /^\s*:/.test(remainingAfterString);

        if (isKey) {
          tokens.push({ text: stringContent, type: 'url' }); // Keys in blue
        } else {
          tokens.push({ text: stringContent, type: 'header' }); // Values in green
        }

        pos = endPos;
        continue;
      }

      // Numbers
      const numberMatch = remaining.slice(pos).match(/^(\d+\.?\d*)/);
      if (numberMatch) {
        tokens.push({ text: numberMatch[0], type: 'keyword' }); // Numbers in yellow
        pos += numberMatch[0].length;
        continue;
      }

      // Booleans and null
      const booleanMatch = remaining.slice(pos).match(/^(true|false|null)/);
      if (booleanMatch) {
        tokens.push({ text: booleanMatch[0], type: 'header' }); // Booleans in green
        pos += booleanMatch[0].length;
        continue;
      }

      // Ellipsis/placeholders
      const ellipsisMatch = remaining.slice(pos).match(/^\.\.\./);
      if (ellipsisMatch) {
        tokens.push({ text: ellipsisMatch[0], type: 'comment' }); // Ellipsis in gray
        pos += ellipsisMatch[0].length;
        continue;
      }

      // Whitespace and other characters
      tokens.push({ text: char, type: 'operator' }); // General code in green
      pos++;
    }
  }
  // Default - no highlighting
  else {
    tokens.push({ text: line, type: 'text' });
  }

  return tokens;
}

export function highlightCode(code: string, format: CodeFormat): React.ReactNode[] {
  const lines = code.split('\n');
  return lines.map((line, lineIndex) => {
    const tokens = highlightLine(line, format);
    
    return (
      <span key={lineIndex} className="block font-mono text-sm whitespace-pre">
        {tokens.map((token, tokenIndex) => (
          <span
            key={tokenIndex}
            style={{ color: colors[token.type] }}
          >
            {token.text}
          </span>
        ))}
        {lineIndex < lines.length - 1 ? '\n' : (line === '' ? '\u00A0' : '')}
      </span>
    );
  });
}

export { colors };

