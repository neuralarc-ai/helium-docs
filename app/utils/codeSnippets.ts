type CodeFormat = 'curl' | 'javascript' | 'python' | 'java' | 'php';

export type EndpointType =
  | 'create-task'
  | 'stop-agent'
  | 'get-results'
  | 'continue-conversation'
  | 'get-history'
  | 'list-files'
  | 'get-file-content';

const codeSnippets: Record<EndpointType, Record<CodeFormat, string>> = {
  'create-task': {
    curl: `curl -X POST "https://api.he2.ai/api/v1/public/quick-action" \\
  -H "X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" \\
  -F "prompt=Create a portfolio website"`,
    javascript: `import fetch from "node-fetch";
import FormData from "form-data";

const form = new FormData();
form.append("prompt", "Create a portfolio website");

await fetch("https://api.he2.ai/api/v1/public/quick-action", {
  method: "POST",
  headers: { "X-API-Key": process.env.HELIUM_API_KEY },
  body: form
});`,
    python: `import requests

url = "https://api.he2.ai/api/v1/public/quick-action"
headers = {"X-API-Key": "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
data = {"prompt": "Create a portfolio website"}

response = requests.post(url, headers=headers, data=data)
print(response.json())`,
    java: `HttpClient client = HttpClient.newHttpClient();

HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.he2.ai/api/v1/public/quick-action"))
    .header("X-API-Key", "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    .POST(HttpRequest.BodyPublishers.ofString("prompt=Create a portfolio website"))
    .build();

client.send(request, HttpResponse.BodyHandlers.ofString());`,
    php: `$ch = curl_init("https://api.he2.ai/api/v1/public/quick-action");

curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => ["X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  CURLOPT_POSTFIELDS => ["prompt" => "Create a portfolio website"],
  CURLOPT_RETURNTRANSFER => true
]);

echo curl_exec($ch);`,
  },
  'stop-agent': {
    curl: `curl -X POST \\
"https://api.he2.ai/api/v1/public/threads/thread_456/agent/stop?project_id=proj_123" \\
-H "X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"`,
    javascript: `await fetch(
  "https://api.he2.ai/api/v1/public/threads/thread_456/agent/stop?project_id=proj_123",
  { method: "POST", headers: { "X-API-Key": API_KEY } }
);`,
    python: `requests.post(
  f"https://api.he2.ai/api/v1/public/threads/thread_456/agent/stop",
  headers={"X-API-Key": "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},
  params={"project_id": "proj_123"}
)`,
    java: `HttpRequest request = HttpRequest.newBuilder()
  .uri(URI.create("https://api.he2.ai/api/v1/public/threads/thread_456/agent/stop?project_id=proj_123"))
  .header("X-API-Key", "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
  .POST(HttpRequest.BodyPublishers.noBody())
  .build();`,
    php: `curl_setopt($ch, CURLOPT_URL,
"https://api.he2.ai/api/v1/public/threads/thread_456/agent/stop?project_id=proj_123");
curl_setopt($ch, CURLOPT_POST, true);`,
  },
  'get-results': {
    curl: `curl -X GET \\
"https://api.he2.ai/api/v1/public/threads/thread_456/response?project_id=proj_123" \\
-H "X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"`,
    javascript: `await fetch(
  "https://api.he2.ai/api/v1/public/threads/thread_456/response?project_id=proj_123",
  { headers: { "X-API-Key": API_KEY } }
);`,
    python: `requests.get(
  "https://api.he2.ai/api/v1/public/threads/thread_456/response",
  headers={"X-API-Key": "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},
  params={"project_id": "proj_123"}
)`,
    java: `HttpRequest request = HttpRequest.newBuilder()
  .uri(URI.create("https://api.he2.ai/api/v1/public/threads/thread_456/response?project_id=proj_123"))
  .header("X-API-Key", "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
  .GET()
  .build();`,
    php: `curl_setopt($ch, CURLOPT_URL,
"https://api.he2.ai/api/v1/public/threads/thread_456/response?project_id=proj_123");`,
  },
  'continue-conversation': {
    curl: `curl -X POST \\
"https://api.he2.ai/api/v1/public/threads/thread_456/response?project_id=proj_123" \\
-H "X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" \\
-F "prompt=Add authentication"`,
    javascript: `const form = new FormData();
form.append("prompt", "Add authentication");

await fetch(
  "https://api.he2.ai/api/v1/public/threads/thread_456/response?project_id=proj_123",
  { method: "POST", headers: { "X-API-Key": API_KEY }, body: form }
);`,
    python: `requests.post(
  "https://api.he2.ai/api/v1/public/threads/thread_456/response",
  headers={"X-API-Key": "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},
  params={"project_id": "proj_123"},
  data={"prompt": "Add authentication"}
)`,
    java: `HttpRequest request = HttpRequest.newBuilder()
  .uri(URI.create("https://api.he2.ai/api/v1/public/threads/thread_456/response?project_id=proj_123"))
  .header("X-API-Key", "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
  .POST(HttpRequest.BodyPublishers.ofString("prompt=Add authentication"))
  .build();`,
    php: `curl_setopt($ch, CURLOPT_POSTFIELDS, ["prompt" => "Add authentication"]);`,
  },
  'get-history': {
    curl: `curl -X GET \\
"https://api.he2.ai/api/v1/public/threads/thread_456/history?project_id=proj_123" \\
-H "X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"`,
    javascript: `await fetch(
  "https://api.he2.ai/api/v1/public/threads/thread_456/history?project_id=proj_123",
  { headers: { "X-API-Key": API_KEY } }
);`,
    python: `requests.get(
  "https://api.he2.ai/api/v1/public/threads/thread_456/history",
  headers={"X-API-Key": "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},
  params={"project_id": "proj_123"}
)`,
    java: `HttpRequest request = HttpRequest.newBuilder()
  .uri(URI.create("https://api.he2.ai/api/v1/public/threads/thread_456/history?project_id=proj_123"))
  .header("X-API-Key", "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
  .GET()
  .build();`,
    php: `curl_setopt($ch, CURLOPT_URL,
"https://api.he2.ai/api/v1/public/threads/thread_456/history?project_id=proj_123");`,
  },
  'list-files': {
    curl: `curl -X GET \\
"https://api.he2.ai/api/v1/public/threads/thread_456/files?project_id=proj_123" \\
-H "X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"`,
    javascript: `await fetch(
  "https://api.he2.ai/api/v1/public/threads/thread_456/files?project_id=proj_123",
  { headers: { "X-API-Key": API_KEY } }
);`,
    python: `requests.get(
  "https://api.he2.ai/api/v1/public/threads/thread_456/files",
  headers={"X-API-Key": "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},
  params={"project_id": "proj_123"}
)`,
    java: `HttpRequest request = HttpRequest.newBuilder()
  .uri(URI.create("https://api.he2.ai/api/v1/public/threads/thread_456/files?project_id=proj_123"))
  .header("X-API-Key", "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
  .GET()
  .build();`,
    php: `curl_setopt($ch, CURLOPT_URL,
"https://api.he2.ai/api/v1/public/threads/thread_456/files?project_id=proj_123");`,
  },
  'get-file-content': {
    curl: `curl -X GET \\
"https://api.he2.ai/api/v1/public/files/thread_456:/workspace/index.html?project_id=proj_123&thread_id=thread_456" \\
-H "X-API-Key: he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"`,
    javascript: `await fetch(
  "https://api.he2.ai/api/v1/public/files/thread_456:/workspace/index.html?project_id=proj_123&thread_id=thread_456",
  { headers: { "X-API-Key": API_KEY } }
);`,
    python: `requests.get(
  "https://api.he2.ai/api/v1/public/files/thread_456:/workspace/index.html",
  headers={"X-API-Key": "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},
  params={"project_id": "proj_123", "thread_id": "thread_456"}
)`,
    java: `HttpRequest request = HttpRequest.newBuilder()
  .uri(URI.create("https://api.he2.ai/api/v1/public/files/thread_456:/workspace/index.html?project_id=proj_123&thread_id=thread_456"))
  .header("X-API-Key", "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
  .GET()
  .build();`,
    php: `curl_setopt($ch, CURLOPT_URL,
"https://api.he2.ai/api/v1/public/files/thread_456:/workspace/index.html?project_id=proj_123&thread_id=thread_456");`,
  },
};

export function getCodeSnippet(
  endpoint: EndpointType,
  format: CodeFormat
): string {
  return codeSnippets[endpoint]?.[format] || codeSnippets[endpoint]?.curl || '';
}

export type { CodeFormat };
