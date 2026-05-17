// 预设后端配置选项
export const BACKENDS_CONFIGS = [
  { label: 'api.aiuwe.me(默认后端)', value: 'https://api.aiuwe.me/sub?' },
  { label: 'sub.aiuwe.me(传统后端)', value: import.meta.env.VITE_SUBCONVERTER_DEFAULT_BACKEND + '/sub?'},
  { label: '127.0.0.1:25500(本地后端)', value: 'http://127.0.0.1:25500/sub?' }
];