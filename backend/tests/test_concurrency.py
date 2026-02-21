"""
QuickCompare Backend — Concurrency Test
Fires 50 simultaneous requests to the search endpoint to validate async performance.
"""
import asyncio
import time
import httpx


BASE_URL = "http://localhost:8000"
NUM_REQUESTS = 50


async def make_request(client: httpx.AsyncClient, i: int) -> dict:
    """Make a single search request."""
    queries = ["butter", "milk", "maggi", "salt", "atta", "coke", "rice", "sugar"]
    query = queries[i % len(queries)]
    start = time.time()
    response = await client.get(
        f"{BASE_URL}/api/v1/search",
        params={"query": query, "pincode": "122001"},
    )
    elapsed = time.time() - start
    return {
        "request_id": i,
        "query": query,
        "status_code": response.status_code,
        "elapsed": round(elapsed, 2),
        "success": response.status_code == 200,
    }


async def main():
    print(f"🚀 Firing {NUM_REQUESTS} concurrent requests to {BASE_URL}/api/v1/search")
    print("=" * 60)

    async with httpx.AsyncClient(timeout=30.0) as client:
        start = time.time()
        tasks = [make_request(client, i) for i in range(NUM_REQUESTS)]
        results = await asyncio.gather(*tasks)
        total_time = time.time() - start

    successes = sum(1 for r in results if r["success"])
    failures = sum(1 for r in results if not r["success"])
    avg_time = sum(r["elapsed"] for r in results) / len(results)
    max_time = max(r["elapsed"] for r in results)
    min_time = min(r["elapsed"] for r in results)

    print(f"\n📊 Results:")
    print(f"   Total requests:  {NUM_REQUESTS}")
    print(f"   ✅ Successes:    {successes}")
    print(f"   ❌ Failures:     {failures}")
    print(f"   ⏱️  Total time:   {total_time:.2f}s")
    print(f"   ⏱️  Avg response: {avg_time:.2f}s")
    print(f"   ⏱️  Min response: {min_time:.2f}s")
    print(f"   ⏱️  Max response: {max_time:.2f}s")

    if failures > 0:
        print("\n❌ FAILED requests:")
        for r in results:
            if not r["success"]:
                print(f"   Request #{r['request_id']}: status={r['status_code']}")

    print(f"\n{'✅ PASS' if failures == 0 else '❌ FAIL'}: Concurrency test {'passed' if failures == 0 else 'failed'}!")


if __name__ == "__main__":
    asyncio.run(main())
