**Server vs Client Components**

I kept data fetching on the server where possible, using lightweight server wrappers around API calls and route handlers; interactive pieces that require reactivity (for example the datatable with sorting and pagination) are Client Components so they can manage local state, effects, and instant UI updates. The trickiest boundary was the datatable layer, I briefly got confused about the source of truth for the table state because it needed to be synced with URL/query parameters and server results.

**Trade-offs**

Due to time constraints I prioritized feature completeness and a scalable Next/React architecture over visual polish and extra component decomposition. I focused on meeting requirements and following community patterns rather than designing an elaborate UI. With another four hours I would improve the visual design and accessibility, split a few components further for reuse, and add stricter validation of query parameters before sending requests to the API.

**Hardest Part**

The most challenging aspect was not using any CSS/component library, which forced building styles and reusable patterns from scratch and consumed extra time. I worked through this by keeping styles modular with CSS Modules, reusing shared tokens, and simplifying component styles so the UI remained maintainable while meeting functional requirements.
