import CodeBlock from '@/app/components/CodeBlock';

export default function CreateTaskPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="mb-6 flex items-center gap-2">
        <span className="rounded bg-blue-600 px-2 py-1 text-xs font-semibold text-white">
          POST
        </span>
        <code className="text-lg">/api/v1/public/quick-action</code>
      </div>

      <h1 className="mb-4 text-4xl font-bold">Create Task (Quick Action)</h1>
      <p className="text-lg text-gray-400">
        Creates and executes a task immediately using FormData. This is the
        primary endpoint for creating new projects with Helium.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Request</h2>
      <CodeBlock endpoint="create-task" />

      <h2 className="mt-8 text-2xl font-semibold">Parameters</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
          <thead className="bg-gray-50 dark:bg-black">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                Parameter
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-black">
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>prompt</code>
              </td>
              <td className="px-4 py-3 text-sm">string (optional)</td>
              <td className="px-4 py-3 text-sm">
                Task description (1-5000 characters). Required if no files
                provided
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>agent_id</code>
              </td>
              <td className="px-4 py-3 text-sm">string (optional)</td>
              <td className="px-4 py-3 text-sm">Specific agent to use</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>model_name</code>
              </td>
              <td className="px-4 py-3 text-sm">string (optional)</td>
              <td className="px-4 py-3 text-sm">Model override</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>enable_thinking</code>
              </td>
              <td className="px-4 py-3 text-sm">boolean (optional)</td>
              <td className="px-4 py-3 text-sm">
                Enable thinking mode (default: false)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>reasoning_effort</code>
              </td>
              <td className="px-4 py-3 text-sm">string (optional)</td>
              <td className="px-4 py-3 text-sm">
                "low", "medium", or "high" (default: "low")
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>enable_context_manager</code>
              </td>
              <td className="px-4 py-3 text-sm">boolean (optional)</td>
              <td className="px-4 py-3 text-sm">
                Enable context manager (default: false)
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>source</code>
              </td>
              <td className="px-4 py-3 text-sm">string (optional)</td>
              <td className="px-4 py-3 text-sm">
                Source platform ("web", "mobile", "widget")
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>metadata</code>
              </td>
              <td className="px-4 py-3 text-sm">string (optional)</td>
              <td className="px-4 py-3 text-sm">
                Additional metadata as JSON string
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm">
                <code>show_in_recent_tasks</code>
              </td>
              <td className="px-4 py-3 text-sm">boolean (optional)</td>
              <td className="px-4 py-3 text-sm">
                Show task in recent tasks list (default: true)
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
        code={`{
  "success": true,
  "project_id": "proj_123",
  "thread_id": "thread_456",
  "agent_run_id": "run_789",
  "message": "Task created and execution started"
}`}
      />

      <h2 className="mt-8 text-2xl font-semibold">File Uploads</h2>
      <p>
        You can upload files with your request using{' '}
        <code>multipart/form-data</code>:
      </p>

      <CodeBlock
        language="bash"
        code={`curl -X POST "https://api.he2.ai/api/v1/public/quick-action" \\
  -H "X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" \\
  -F "prompt=Analyze this image and create a website" \\
  -F "files=@/path/to/image.png" \\
  -F "source=web"`}
      />

      <h3 className="mt-6 text-xl font-semibold">Supported Files</h3>
      <ul className="list-disc space-y-1 pl-6">
        <li>
          <strong>Images:</strong> .png, .jpg, .jpeg, .gif, .svg, .webp
        </li>
        <li>
          <strong>Documents:</strong> .pdf, .docx, .xlsx, .pptx, .csv
        </li>
        <li>
          <strong>Text:</strong> .txt, .json, .xml, .md
        </li>
        <li>
          <strong>Audio:</strong> .mp3, .wav, .flac, .aac
        </li>
        <li>
          <strong>Archives:</strong> .zip, .rar, .7z
        </li>
      </ul>

      <h3 className="mt-6 text-xl font-semibold">Limits</h3>
      <ul className="list-disc space-y-1 pl-6">
        <li>Max 10 files per request</li>
        <li>Max 50MB per file</li>
        <li>Max 200MB total</li>
      </ul>
    </div>
  );
}

