import CodeBlock from '@/app/components/CodeBlock';

export default function GetResultsPage() {
  return (
    <>
      <div className="mb-6 flex items-center gap-2">
        <span className="rounded bg-[#6bdd9a] px-2 py-1 text-xs font-semibold text-black">
          GET
        </span>
        <code className="text-lg">
          /api/v1/public/threads/&#123;thread_id&#125;/response
        </code>
      </div>

      <h1 className="mb-4 text-4xl font-bold">Get Task Results</h1>
      <p className="text-lg text-gray-400">
        Fetches results from a completed or running task. Use this endpoint to
        poll for task completion and retrieve the generated content.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Request</h2>
      <CodeBlock endpoint="get-results" />

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
                The thread ID from the create task response
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
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-200">
                <code className="bg-zinc-800 px-2 py-1 rounded text-gray-200">project_id</code>
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">string (required)</td>
              <td className="px-6 py-4 text-sm text-gray-300">
                Project ID from quick action response
              </td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-200">
                <code className="bg-zinc-800 px-2 py-1 rounded text-gray-200">timeout</code>
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">integer (optional)</td>
              <td className="px-6 py-4 text-sm text-gray-300">
                Max wait time in seconds (0-600, default: 300)
              </td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-200">
                <code className="bg-zinc-800 px-2 py-1 rounded text-gray-200">realtime</code>
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">boolean (optional)</td>
              <td className="px-6 py-4 text-sm text-gray-300">
                Enable WebSocket-based streaming (default: false)
              </td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-200">
                <code className="bg-zinc-800 px-2 py-1 rounded text-gray-200">include_file_content</code>
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">boolean (optional)</td>
              <td className="px-6 py-4 text-sm text-gray-300">
                Include file content inline (default: false)
              </td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-200">
                <code className="bg-zinc-800 px-2 py-1 rounded text-gray-200">page</code>
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">integer (optional)</td>
              <td className="px-6 py-4 text-sm text-gray-300">
                Page number for pagination (default: 1)
              </td>
            </tr>
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-200">
                <code className="bg-zinc-800 px-2 py-1 rounded text-gray-200">page_size</code>
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">integer (optional)</td>
              <td className="px-6 py-4 text-sm text-gray-300">
                Items per page (1-1000, default: 100)
              </td>
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
  "thread_id": "thread_456",
  "project_id": "proj_123",
  "agent_run_id": "run_789",
  "status": "completed",
  "response": {
    "role": "assistant",
    "content": "Here is your website...",
    "message_id": "msg_1"
  },
  "has_code": true,
  "has_files": true,
  "code_blocks": [
    {
      "language": "html",
      "code": "<!DOCTYPE html>..."
    }
  ],
  "files": [
    {
      "file_id": "file_1",
      "file_name": "index.html",
      "file_size": 2048,
      "included_inline": true,
      "content": "<!DOCTYPE html>...",
      "encoding": "utf-8"
    }
  ]
}`}
      />

      <h2 className="mt-8 text-2xl font-semibold">Status Values</h2>
      <ul className="list-disc space-y-1 pl-6">
        <li>
          <code>completed</code>: Task finished successfully
        </li>
        <li>
          <code>running</code>: Task still in progress
        </li>
        <li>
          <code>failed</code>: Task encountered an error
        </li>
        <li>
          <code>stopped</code>: Task was manually stopped
        </li>
        <li>
          <code>no_run</code>: No task exists for this thread
        </li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">Real-Time Streaming</h2>
      <p>
        Get live updates as the AI works using WebSocket-based streaming:
      </p>

      <CodeBlock
        language="bash"
        code={`curl -X GET "https://api.he2.ai/api/v1/public/threads/thread_456/response?project_id=proj_123&realtime=true" \\
  -H "X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"`}
      />

      <p className="mt-4">Stream events:</p>
      <CodeBlock
        language="text"
        code={`data: {"type": "status", "status": "running"}
data: {"type": "content", "content": "First chunk..."}
data: {"type": "status", "status": "completed"}`}
      />
    </>
  );
}

