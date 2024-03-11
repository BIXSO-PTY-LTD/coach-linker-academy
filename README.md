# Hướng dẫn

## Yêu cầu

-   nvm (node version manager):
    -   MacOS: <https://github.com/nvm-sh/nvm>
    -   Windows: <https://github.com/coreybutler/nvm-windows>
-   MongoDB: over 7.0 <https://www.mongodb.com/docs/manual/administration/install-community/>
-   Node: 20.11.1 (nvm sẽ tự động cài đặt phiên bản này nếu chưa có)
    -   MacOS: <https://nodejs.org/dist/v20.11.1/node-v20.11.1.pkg>
    -   Windows: <https://nodejs.org/dist/v20.11.1/node-v20.11.1-x64.msi>
-   Dùng npm, không dùng các công cụ khác để tránh xung đột

## Cài đặt

```bash
rm -rf node_modules && rm -f package-lock.json && npm --color=always i
```

## Chạy ở môi trường development

```bash
npm run dev
```

Khi thành công sẽ thấy terminal/console hiển thị thông báo:

```bash
▲ Next.js 14.1.3
- Local:        http://localhost:8001
- Environments: .env
```

## Kiểm tra lỗi (chạy thủ công)

```bash
npm run lint:check
```

## Sửa lỗi (chạy thủ công)

```bash
npm run lint:fix
```

## Một số quy ước

### Quy ước đặt tên

-   Tên biến: `camelCase`
-   Tên hàm: `camelCase`
-   Tên biến parameter: `camelCase`
-   Tên biến argument: `camelCase`

-   Tên biến private: `_camelCase`
-   Tên biến protected: `camelCase_`
-   Tên biến static: `camelCase_`
-   Tên class: `PascalCase`
-   Tên hằng số: `UPPER_CASE`
-   Tên file: `kebab-case`
-   Tên thư mục: `kebab-case`

### Quy ước đặt tên type typescript

-   Dùng tiền tố `I_` cho interface (ví dụ: `I_User`)
-   Dùng tiền tố `T_` cho type (ví dụ: `T_User`)
-   Dùng tiền tố `E_` cho enum (ví dụ: `E_User`)

### Quy ước đặt tên biến môi trường

-   Dùng tiền tố `REACT_APP_` cho biến môi trường của react
-   Dùng tiền tố `NEXT_PUBLIC_` cho biến môi trường của nextjs
-   Dùng tiền tố `VITE_` cho biến môi trường của vite
-   Dùng tiền tố `NODE_` cho biến môi trường của node

### Quy ước viết code

-   Không dùng `var`
-   Không dùng `==`
-   Xóa `console.log` trước khi commit
-   Xóa `debugger` trước khi commit
-   Không dùng `any`, `unknown`, `never` nếu không cần thiết
-   Không dùng `@ts-ignore`
-   Không dùng `@ts-nocheck`

### Quy ước commit

-   Commit message có dạng: `type(scope): message` (ví dụ: `feat(user): add user feature`)

### Quy ước pull request

-   Pull request có dạng: `type(scope): message` (ví dụ: `feat(user): add user feature`)

## Cấu trúc thư mục và ý nghĩa

```text
.
├── public
│   ├── next.svg
│   └── vercel.svg
├── shared => Các file dùng chung
│   └── contexts => Các context dùng chung
│       ├── index.ts => import tất cả các context con vào index
│       └── Loading.tsx => Context loading
├── typescript => Các kiểu typescript
│   ├── index.ts => import tất cả các type con vào index
│   └── loading.ts
├── .commitlintrc => quy ước commit
├── .editorconfig => quy ước format code
├── .env => biến môi trường
├── .env.example => mẫu biến môi trường
├── .eslintrc => cấu hình eslint
├── .gitignore => cấu hình git
├── .lintstagedrc => cấu hình lint-staged
├── .ncurc.js => cấu hình commitizen
├── .nvmrc => phiên bản node
├── .prettierrc => quy ước format code
├── next-env.d.ts => nextjs types
├── next.config.mjs => cấu hình nextjs
├── package-lock.json => cấu hình npm
├── package.json => cấu hình npm
├── postcss.config.js => cấu hình postcss
├── README.md => hướng dẫn
├── tailwind.config.ts => cấu hình tailwindcss
└── tsconfig.json => cấu hình typescript
```
