"use client";

export const Button = () => {
  return (
    <button onClick={() => {
      umami.track(props => ({
        ...props,
        url: 'https://nextjs-blog-tau-orpin.vercel.app/?utm_source=newsletter&utm_medium=email&utm_campaign=sales',
        title: '注册页面',
        name: '注册事件',
        data: {
          name: '乌萨奇',
          id: 123,
        },
      }));
    }}>发送</button>
  );
};