import CodeBlock from '@/app/components/CodeBlock';

export default function ErrorHandlingPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="mb-4 text-4xl font-bold">Error Handling</h1>
      <p className="text-lg text-gray-400">
        Understanding HTTP status codes and error responses helps you build
        robust applications.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">HTTP Status Codes</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
          <thead className="bg-gray-50 dark:bg-black">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                Code
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                Meaning
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-300">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-black">
            <tr>
              <td className="px-4 py-3 text-sm font-mono">200</td>
              <td className="px-4 py-3 text-sm">Success</td>
              <td className="px-4 py-3 text-sm">Process response</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-mono">400</td>
              <td className="px-4 py-3 text-sm">Bad Request</td>
              <td className="px-4 py-3 text-sm">Check parameters</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-mono">401</td>
              <td className="px-4 py-3 text-sm">Unauthorized</td>
              <td className="px-4 py-3 text-sm">Verify API key</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-mono">402</td>
              <td className="px-4 py-3 text-sm">Payment Required</td>
              <td className="px-4 py-3 text-sm">Check billing/credits</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-mono">404</td>
              <td className="px-4 py-3 text-sm">Not Found</td>
              <td className="px-4 py-3 text-sm">Check IDs</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-mono">422</td>
              <td className="px-4 py-3 text-sm">Validation Error</td>
              <td className="px-4 py-3 text-sm">Fix input format</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-mono">429</td>
              <td className="px-4 py-3 text-sm">Rate Limited</td>
              <td className="px-4 py-3 text-sm">Wait and retry</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm font-mono">500</td>
              <td className="px-4 py-3 text-sm">Server Error</td>
              <td className="px-4 py-3 text-sm">Retry later</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="mt-8 text-2xl font-semibold">Error Response Format</h2>
      <p>All error responses follow this format:</p>

      <CodeBlock
        language="json"
        code={`{
  "detail": "Error message describing the issue"
}`}
      />

      <h2 className="mt-8 text-2xl font-semibold">Common Error Scenarios</h2>

      <h3 className="mt-6 text-xl font-semibold">401 Unauthorized</h3>
      <p>Your API key is invalid or missing:</p>
      <CodeBlock
        language="json"
        code={`{
  "detail": "API key not found"
}`}
      />
      <p className="mt-2">
        <strong>Solution:</strong> Verify your API key format and ensure it's
        included in the <code>X-API-Key</code> header.
      </p>

      <h3 className="mt-6 text-xl font-semibold">400 Bad Request</h3>
      <p>Invalid parameters or missing required fields:</p>
      <CodeBlock
        language="json"
        code={`{
  "detail": "prompt is required when no files are provided"
}`}
      />
      <p className="mt-2">
        <strong>Solution:</strong> Check the endpoint documentation and ensure
        all required parameters are provided.
      </p>

      <h3 className="mt-6 text-xl font-semibold">429 Rate Limited</h3>
      <p>You've exceeded your rate limit:</p>
      <CodeBlock
        language="json"
        code={`{
  "detail": "Rate limit exceeded. Please try again later."
}`}
      />
      <p className="mt-2">
        <strong>Solution:</strong> Wait for the rate limit window to reset or
        upgrade your plan. Check the <code>X-RateLimit-Reset</code> header for
        the reset time.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Best Practices</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Always check HTTP status codes before processing responses</li>
        <li>Implement retry logic for 429 and 500 errors</li>
        <li>Log error details for debugging</li>
        <li>Display user-friendly error messages</li>
        <li>Handle network timeouts gracefully</li>
        <li>Validate inputs before sending requests</li>
      </ul>
    </div>
  );
}

