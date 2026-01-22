import CodeBlock from '@/app/components/CodeBlock';

export default function ContinueConversationPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="mb-6 flex items-center gap-2">
        <span className="rounded bg-[#ffe47e] px-2 py-1 text-xs font-semibold text-black">
          POST
        </span>
        <code className="text-lg">
          /api/v1/public/threads/&#123;thread_id&#125;/response
        </code>
      </div>

      <h1 className="mb-4 text-4xl font-bold">Continue Conversation</h1>
      <p className="text-lg text-gray-400">
        Add a follow-up message to an existing conversation using FormData.
        This allows you to iterate on your project with additional requests.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Request</h2>
      <CodeBlock endpoint="continue-conversation" />

      <h2 className="mt-8 text-2xl font-semibold">Path Parameters</h2>
      <div className="overflow-x-auto mt-4 rounded-md border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <table className="min-w-full">
          <thead className="bg-zinc-800/80">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Parameter
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Type
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-700/50">
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>thread_id</code>
              </td>
              <td className="px-4 py-3 text-sm">string (required)</td>
              <td className="px-4 py-3 text-sm">
                The thread ID from the original task
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Query Parameters</h2>
      <div className="overflow-x-auto mt-4 rounded-md border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <table className="min-w-full">
          <thead className="bg-zinc-800/80">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Parameter
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Type
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-700/50">
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>project_id</code>
              </td>
              <td className="px-4 py-3 text-sm">string (required)</td>
              <td className="px-4 py-3 text-sm">Project ID</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Body Parameters</h2>
      <div className="overflow-x-auto mt-4 rounded-md border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <table className="min-w-full">
          <thead className="bg-zinc-800/80">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Parameter
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Type
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-200 border-b border-zinc-700">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-700/50">
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>prompt</code>
              </td>
              <td className="px-4 py-3 text-sm">string (optional)</td>
              <td className="px-4 py-3 text-sm">
                Follow-up message (1-5000 characters). Required if no files
                provided
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>files</code>
              </td>
              <td className="px-4 py-3 text-sm">file[] (optional)</td>
              <td className="px-4 py-3 text-sm">File uploads</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Response</h2>
      <CodeBlock
        language="json"
        showStatus={true}
        statusCode="200"
        code={`{
  "success": true,
  "agent_run_id": "run_123",
  "status": "running",
  "message": "Follow-up accepted"
}`}
      />

      <h2 className="mt-8 text-2xl font-semibold">With Files</h2>
      <p>You can also include files in your follow-up message:</p>
      <CodeBlock
        language="bash"
        code={`curl -X POST "https://api.he2.ai/api/v1/public/threads/thread_456/response?project_id=proj_123" \\
  -H "X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" \\
  -F "prompt=Analyze this additional file" \\
  -F "files=@/path/to/document.pdf"`}
      />
    </div>
  );
}

