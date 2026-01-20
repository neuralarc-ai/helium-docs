import CodeBlock from '@/app/components/CodeBlock';

export default function AuthenticationPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="mb-4 text-4xl font-bold">Authentication</h1>
      <p className="text-lg text-gray-400">
        All API requests require authentication. You can use either an API key
        or a JWT token.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">API Key Authentication</h2>
      <p>
        Include your API key in the <code>X-API-Key</code> header for every
        request:
      </p>

      <CodeBlock
        language="bash"
        code={`-H "X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"`}
      />

      <div className="my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
        <p className="mb-0 text-sm text-yellow-900 dark:text-yellow-200">
          <strong>Security Note:</strong> Never share your API key or commit it
          to version control. Keep it secure and rotate it regularly.
        </p>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">JWT Token Authentication</h2>
      <p>
        For web applications, you can use JWT tokens instead of API keys:
      </p>

      <CodeBlock
        language="bash"
        code={`-H "Authorization: Bearer <jwt_token>"`}
      />

      <h3 className="mt-6 text-xl font-semibold">When to Use Each Method</h3>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>API Keys:</strong> Best for server-to-server communication,
          scripts, and backend services
        </li>
        <li>
          <strong>JWT Tokens:</strong> Best for web applications where users
          authenticate through your platform
        </li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">Getting Your API Key</h2>
      <ol className="list-decimal space-y-2 pl-6">
        <li>
          Visit{' '}
          <a
            href="https://he2.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            https://he2.ai/
          </a>
        </li>
        <li>Navigate to Settings → API Keys</li>
        <li>Click "Create New API Key"</li>
        <li>Copy the key immediately (you won't be able to see it again)</li>
      </ol>

      <div className="my-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
        <p className="mb-0 text-sm text-red-900 dark:text-red-200">
          <strong>Important:</strong> If you lose your API key, you'll need to
          create a new one. The old key cannot be recovered.
        </p>
      </div>
    </div>
  );
}

