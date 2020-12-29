<template>
    <div>
    fetched url: {{ url }}
    <br>
    num: {{ num }}
    <br>
    X-Vercel-Cache: {{ vercelCacheHeader }}
</div>
</template>

<script>
export default {
    async asyncData({ env, params }) {
        const url = `${env.baseUrl}/api/${params.xyz}`
        const res = await fetch(url)
        const vercelCacheHeader = res.headers.get("X-Vercel-Cache") || "~none~"
        const num = await res.text()
        return { url, num, vercelCacheHeader }
    }
}
</script>