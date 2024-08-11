/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "source.unsplash.com",
            "lh3.googleusercontent.com",
            "ssl.pstatic.net",
            "k.kakaocdn.net",
            "t1.kakaocdn.net",
            "yeogi-bucket.s3.ap-northeast-2.amazonaws.com",
        ],
    },
    async rewrites() {
        return [
            {
                source: "/api/posts/:path*",
                destination: "http://ec2-43-203-193-158.ap-northeast-2.compute.amazonaws.com:8080/posts/:path*",
            },
            {
                source: "/posts/:path*",
                destination: "http://ec2-43-203-193-158.ap-northeast-2.compute.amazonaws.com:8080/posts:path*",
            },
            {
                source: "/member/:path*",
                destination: "http://ec2-43-203-193-158.ap-northeast-2.compute.amazonaws.com:8080/member/:path*",
            },
            {
                source: "/comments/:path*",
                destination: "http://ec2-43-203-193-158.ap-northeast-2.compute.amazonaws.com:8080/comments/:path*",
            },
            {
                source: "/reply/:path*",
                destination: "http://ec2-43-203-193-158.ap-northeast-2.compute.amazonaws.com:8080/:path*",
            },
            {
                source: "/auth/:path*",
                destination: "http://ec2-43-203-193-158.ap-northeast-2.compute.amazonaws.com:8080/auth/:path*",
            },
            {
                source: "/pins/:path*",
                destination: "http://ec2-43-203-193-158.ap-northeast-2.compute.amazonaws.com:8080/:path*",
            },
        ]
    },
    reactStrictMode: false,
    webpack: (config, { dev, isServer }) => {
        // 개발 환경에서만 React Developer Tools를 포함시키는 로직.
        if (!dev && !isServer) {
            config.plugins = config.plugins.filter(plugin => {
                return plugin.constructor.name !== "ReactDevToolsPlugin"
            })
        }
        return config
    },
}

export default nextConfig
