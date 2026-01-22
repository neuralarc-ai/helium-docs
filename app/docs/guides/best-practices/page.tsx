import CodeBlock from '@/app/components/CodeBlock';

export default function BestPracticesPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="mb-4 text-4xl font-bold">Best Practices</h1>
      <p className="text-lg text-gray-400">
        Learn how to write effective prompts, handle files efficiently, monitor
        progress, and implement robust error handling.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">1. Write Clear Prompts</h2>
      <p>
        The quality of your prompt directly affects the output. Be specific and
        detailed.
      </p>

      <div className="my-4">
        <h3 className="text-lg font-semibold">Good:</h3>
        <CodeBlock
          language="text"
          code={`"Create a React Native mobile app for tracking daily water intake"`}
        />
      </div>

      <div className="my-4">
        <h3 className="text-lg font-semibold">Better:</h3>
        <CodeBlock
          language="text"
          code={`"Build a React Native water tracking app with:
- Daily water intake logging
- Progress visualization with charts
- Local storage for offline use
- Push notifications for reminders
- Material Design UI
- iOS and Android support"`}
        />
      </div>

      <h2 className="mt-8 text-2xl font-semibold">2. Handle Files Efficiently</h2>
      <p>Save generated files to disk with proper error handling:</p>

      <CodeBlock
        language="python"
        code={`import base64
import os

def save_files(results):
    """Save generated files to disk"""
    os.makedirs("generated_files", exist_ok=True)
    
    for file_info in results.get('files', []):
        filename = file_info['file_name']
        filepath = f"generated_files/{filename}"
        
        if file_info['included_inline']:
            # File content is included
            if file_info['encoding'] == 'utf-8':
                # Text file
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(file_info['content'])
            else:
                # Binary file (base64)
                with open(filepath, 'wb') as f:
                    f.write(base64.b64decode(file_info['content']))
        else:
            # Download from URL
            import requests
            response = requests.get(file_info['download_url'])
            with open(filepath, 'wb') as f:
                f.write(response.content)
        
        print(f"Saved: {filename}")`}
      />

      <h2 className="mt-8 text-2xl font-semibold">3. Monitor Progress</h2>
      <p>
        Implement polling with progress updates to track task completion:
      </p>

      <CodeBlock
        language="python"
        code={`def wait_for_completion(thread_id, project_id, max_minutes=10):
    """Wait for task completion with progress updates"""
    import time
    
    start_time = time.time()
    max_seconds = max_minutes * 60
    
    while time.time() - start_time < max_seconds:
        results = get_results(thread_id, project_id, timeout=30)
        
        if results['status'] == 'completed':
            print(" Task completed!")
            return results
        elif results['status'] == 'failed':
            print(" Task failed!")
            return results
        elif results['status'] == 'running':
            elapsed = int(time.time() - start_time)
            print(f"⏳ Still working... ({elapsed}s)")
            time.sleep(10)
    
    print("⏰ Timeout reached")
    return results`}
      />

      <h2 className="mt-8 text-2xl font-semibold">4. Implement Retry Logic</h2>
      <p>
        Add automatic retry for transient failures with exponential backoff:
      </p>

      <CodeBlock
        language="python"
        code={`def robust_request(prompt, max_retries=3):
    """Create task with automatic retry"""
    for attempt in range(max_retries):
        try:
            task = create_task(prompt)
            results = wait_for_completion(
                task['thread_id'],
                task['project_id']
            )
            
            if results['status'] == 'completed':
                return results
            elif attempt < max_retries - 1:
                print(f"Attempt {attempt + 1} failed, retrying...")
                time.sleep(5 * (attempt + 1))
            
        except Exception as e:
            if attempt < max_retries - 1:
                print(f"Error: {e}. Retrying...")
                time.sleep(2 ** attempt)
            else:
                raise e`}
      />

      <h2 className="mt-8 text-2xl font-semibold">5. Use Streaming for Real-Time Updates</h2>
      <p>
        Enable real-time streaming to get live updates as the AI works:
      </p>

      <CodeBlock
        language="python"
        code={`import requests
import json

def stream_response(thread_id, project_id):
    """Stream real-time updates"""
    url = f"https://api.he2.ai/api/v1/public/threads/{thread_id}/response"
    params = {
        "project_id": project_id,
        "realtime": "true",
        "timeout": 300
    }
    headers = {"X-API-Key": "he-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}
    
    response = requests.get(url, params=params, headers=headers, stream=True)
    
    for line in response.iter_lines():
        if line:
            line = line.decode('utf-8')
            if line.startswith('data: '):
                data = json.loads(line[6:])
                print(f"Event: {data.get('type')}")
                
                if data.get('type') == 'content':
                    print(f"Content: {data.get('content')}")
                elif data.get('type') == 'status':
                    print(f"Status: {data.get('status')}")`}
      />

      <h2 className="mt-8 text-2xl font-semibold">6. Error Handling</h2>
      <p>Always handle errors gracefully:</p>

      <ul className="list-disc space-y-2 pl-6">
        <li>Check HTTP status codes before processing responses</li>
        <li>Handle rate limit errors (429) with exponential backoff</li>
        <li>Validate API key format before making requests</li>
        <li>Log errors with context for debugging</li>
        <li>Provide user-friendly error messages</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold">7. Security Considerations</h2>
      <ul className="list-disc space-y-2 pl-6">
        <li>Never commit API keys to version control</li>
        <li>Use environment variables for sensitive data</li>
        <li>Rotate API keys regularly</li>
        <li>Validate and sanitize user inputs</li>
        <li>Implement rate limiting on your side</li>
      </ul>
    </div>
  );
}

