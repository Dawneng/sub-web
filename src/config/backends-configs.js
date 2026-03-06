// 预设后端配置选项
export const BACKENDS_CONFIGS = [
  { label: 'api.auiwe.com(默认后端)', value: import.meta.env.VITE_SUBCONVERTER_DEFAULT_BACKEND + '/sub?'},
  { label: 'api.asailor.org(SubConverter-Extended 作者提供)', value: 'https://api.asailor.org/sub?' },
  { label: '127.0.0.1:25500(本地后端)', value: 'http://127.0.0.1:25500/sub?' }
];