# Google Search Console — Post-Publish Indexing Tasks

Paste this prompt into Claude in Chrome while you have Google Search Console open for the property **www.stuccoaustin.com**.

---

## Prompt

I just published 8 new blog posts and updated SEO metadata on 6 existing pages on www.stuccoaustin.com. I need you to help me complete these tasks in Google Search Console:

### Task 1: Submit the Updated Sitemap

Go to **Sitemaps** in the left sidebar. Submit this sitemap URL if it is not already submitted:

```
https://www.stuccoaustin.com/sitemap.xml
```

If it is already submitted, click on it and use the three-dot menu to select **Resubmit sitemap** so Google picks up the 8 new URLs.

### Task 2: Request Indexing for the 8 New Blog Posts

Go to **URL Inspection** (the search bar at the top). For each URL below, paste it in, wait for the result, then click **Request Indexing**. Do all 8:

1. `https://www.stuccoaustin.com/blog/popcorn-ceiling-removal-cost-austin`
2. `https://www.stuccoaustin.com/blog/stucco-painting-cost-austin`
3. `https://www.stuccoaustin.com/blog/stucco-inspection-cost-austin`
4. `https://www.stuccoaustin.com/blog/stucco-foundation-repair-austin`
5. `https://www.stuccoaustin.com/blog/stucco-fence-cost-austin`
6. `https://www.stuccoaustin.com/blog/stucco-wall-cost-austin`
7. `https://www.stuccoaustin.com/blog/stucco-chimney-cost-repair-austin`
8. `https://www.stuccoaustin.com/blog/weep-screed-repair-cost`

### Task 3: Request Re-Indexing for the 6 Updated Pages

Same process — URL Inspection, paste, then **Request Indexing** for each:

1. `https://www.stuccoaustin.com/`
2. `https://www.stuccoaustin.com/austin-stucco-repair`
3. `https://www.stuccoaustin.com/austin-stucco-installation`
4. `https://www.stuccoaustin.com/eifs-contractor-austin`
5. `https://www.stuccoaustin.com/blog/stucco-repair-cost-austin`
6. `https://www.stuccoaustin.com/blog/cost-to-stucco-a-house-austin`

### Notes

- Google limits you to roughly 10–12 indexing requests per day per property. If you hit the limit, come back tomorrow and finish the remaining URLs.
- Start with the new blog posts (Task 2) since those are completely unknown to Google. The updated pages (Task 3) will get re-crawled naturally too, so they are lower priority if you hit the daily limit.
- After submitting, check back in 2–3 days under **Pages** > **Why pages aren't indexed** to confirm the new URLs are being picked up.
