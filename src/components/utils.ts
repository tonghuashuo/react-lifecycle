/**
 * @description 模拟异步请求的响应延迟
 */
export const getDelay = (min: number = 100, max: number = 500) => Math.round(Math.random() * (max - min) + min)
