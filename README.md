## npm run dev

in order to use 👆

## Linking and Navigating <em>-suggestion-</em>;

<h4>Recommendation: Use the <Link> component for navigation unless you have a specific requirement for using useRouter.</h4>

## 🔭 use link in this way

- <Link href="/">x</Link> or  -href={`/blog/${post.slug}`} or replace or prefetch

## Migrating from the pages directory:

- The new useRouter hook should be imported from next/navigation and not next/router
- The pathname string has been removed and is replaced by usePathname()
- The query object has been removed and is replaced by useSearchParams()

## 💼 Technical Skills

<!-- ///////////////////////// -->

## Routing Fundamentals

- <strong>layout</strong> Shared UI for a segment and its children
- <strong>page</strong> Unique UI of a route and make routes publicly accessible
- <strong>loading</strong> Loading UI for a segment and its children
- <strong>not found</strong> Not found UI for a segment and its children
- <strong>error</strong> Error UI for a segment and its children
- <strong>global-error</strong> Global Error UI
- <strong>route</strong> Server-side API endpoint (specifcally for backend which we do not need that at all)
- <strong>tstrongplate</strong> Specialized re-rendered Layout UI
- <strong>default</strong> Fallback UI for Parallel Routes
