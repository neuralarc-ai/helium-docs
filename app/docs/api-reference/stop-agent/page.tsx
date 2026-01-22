import CodeBlock from '@/app/components/CodeBlock';

export default function StopAgentPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="mb-6 flex items-center gap-2">
        <span className="rounded bg-[#ffe47e] px-2 py-1 text-xs font-semibold text-black">
          POST
        </span>
        <code className="text-lg">
          /api/v1/public/threads/&#123;thread_id&#125;/agent/stop
        </code>
      </div>

      <h1 className="mb-4 text-4xl font-bold">Stop Agent</h1>
      <p className="text-lg text-gray-400">
        Stop a running task. This endpoint allows you to cancel an agent
        execution that is currently in progress.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Request</h2>
      <CodeBlock endpoint="stop-agent" />

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
            <tr className="hover:bg-zinc-800/30 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-200">
                <code className="bg-zinc-800 px-2 py-1 rounded text-gray-200">thread_id</code>
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">string (required)</td>
              <td className="px-6 py-4 text-sm text-gray-300">
                The thread ID of the running task
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
              <td className="px-6 py-4 text-sm text-gray-300">Project ID</td>
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
  "status": "stopped"
}`}
      />

      <div className="my-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
        <p className="mb-0 text-sm text-yellow-900 dark:text-yellow-200">
          <strong>Note:</strong> Once a task is stopped, it cannot be resumed.
          You'll need to create a new task if you want to continue.
        </p>
      </div>
    </div>
  );
}

