# Welcome to Remix + Vite!

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/guides/vite) for details on supported features.

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
npm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Development

Run the Vite dev server:

```sh
npm run dev
```

To run Wrangler:

```sh
npm run build
npm run start
```

## Deployment

> [!WARNING]  
> Cloudflare does _not_ use `wrangler.toml` to configure deployment bindings.
> You **MUST** [configure deployment bindings manually in the Cloudflare dashboard][bindings].

First, build your app for production:

```sh
npm run build
```

Then, deploy your app to Cloudflare Pages:

```sh
npm run deploy
```

[bindings]: https://developers.cloudflare.com/pages/functions/bindings/

## Database

### Generate migration

```sh
npx drizzle-kit generate
```

Create the table in remote:

### Apply migration

First remove the old table if it exists:

```sh	
wrangler d1 execute 'festa-os-2024' --local --command "DROP TABLE  'open_source_projects'"
```

Then apply the migration:

```sh
npx wrangler d1 migrations apply 'festa-os-2024' --local
```

Replace --local with --remote to apply the migration in the remote database.

### Add user

```sh
wrangler d1 execute 'festa-os-2024' --local --command "INSERT INTO users (id, email, password ) VALUES (1, '----', '----');"
```