import CodeBlock from '@/app/components/CodeBlock';

export default function QuickStartPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="mb-4 text-4xl font-bold text-white">Quick Start</h1>
      <p className="text-lg text-gray-400">
        Helium is an AI-powered platform that creates websites, apps, images,
        videos, and more using natural language. This guide shows you how to
        use the Public API.
      </p>

      <div className="my-8 rounded-lg border border-blue-800 bg-blue-900/20 p-4">
        <p className="mb-0 text-sm font-medium text-blue-200">
          <strong>Base URL:</strong> <code>https://api.he2.ai</code>
        </p>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Get Your API Key</h2>
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
          </a>{' '}
          and sign up
        </li>
        <li>Go to Settings → API Keys</li>
        <li>
          Create a new API key (format:{' '}
          <code>he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</code>)
        </li>
        <li>Keep it secure - never share or commit to code</li>
      </ol>

      <h2 className="mt-8 text-2xl font-semibold">Your First API Call</h2>
      <p>
        Create and execute a task immediately with a simple POST request:
      </p>

      <CodeBlock
        language="bash"
        code={`curl -X POST "https://api.he2.ai/api/v1/public/quick-action" \\
  -H "X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" \\
  -F "prompt=Create a simple hello world website"`}
      />

      <h3 className="mt-6 text-xl font-semibold">Response:</h3>
      <CodeBlock
        language="json"
        code={`{
  "success": true,
  "project_id": "proj_abc123",
  "thread_id": "thread_xyz789",
  "agent_run_id": "run_123456",
  "message": "Task created and execution started"
}`}
      />

      <h2 className="mt-8 text-2xl font-semibold">Get Results</h2>
      <p>Retrieve the results from your completed task:</p>

      <CodeBlock
        language="bash"
        code={`curl -X GET "https://api.he2.ai/api/v1/public/threads/thread_xyz789/response?project_id=proj_abc123" \\
  -H "X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"`}
      />

      <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
        <p className="mb-0 text-sm text-green-900 dark:text-green-200">
          <strong>Next Steps:</strong> Check out the{' '}
          <a
            href="/docs/authentication"
            className="font-medium underline hover:no-underline"
          >
            Authentication
          </a>{' '}
          guide to learn more about API keys and JWT tokens, or explore the{' '}
          <a
            href="/docs/api-reference/create-task"
            className="font-medium underline hover:no-underline"
          >
            API Reference
          </a>{' '}
          for detailed endpoint documentation.
        </p>
      </div>
    </div>
  );
}

