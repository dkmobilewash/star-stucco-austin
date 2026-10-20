# Google Ads Lead Flow Audit Prompt — Star Stucco of Austin

Use this prompt with the Claude Chrome extension while logged into the Google Ads account for Star Stucco of Austin (stuccoaustin.com).

**The problem:** Ads are getting good clicks, impressions, and CPC — but zero or near-zero leads (contact form submissions, phone calls) are coming through the website. Something is broken between the click and the conversion.

---

## Prompt

You are performing a full Google Ads audit for Star Stucco of Austin (www.stuccoaustin.com), a stucco contractor in Austin, TX. The ads are generating solid clicks, impressions, and CPC, but almost no leads are coming through — no form submissions, no phone calls from the website. Something in the funnel is broken. I need you to audit every layer methodically and tell me exactly what's wrong and how to fix it.

Work through every section below. Do not skip any. Give me exact, specific findings — not generic advice.

---

### SECTION 1: CONVERSION TRACKING AUDIT (CHECK THIS FIRST — most likely culprit)

This is the #1 reason for "clicks but no leads." Go to **Tools & Settings > Measurement > Conversions** (or Goals > Conversions in the new UI).

**Report:**

1. **Are there ANY conversion actions set up?** List every one you see with:
   - Conversion name
   - Source (Website, Phone calls, Import, etc.)
   - Status (Active, Inactive, No recent conversions, Tag inactive, Unverified)
   - Category (Lead, Purchase, etc.)
   - Count setting (One or Every)
   - Conversion window
   - Last conversion date

2. **If no conversion actions exist:** This is the problem. No tracking = no leads recorded. We need to set up:
   - **Contact form submission tracking**: A conversion that fires when someone submits the form at stuccoaustin.com/contact. This can be done via:
     - Google Ads tag on a thank-you page (if one exists after form submission)
     - Google Ads tag firing on a form submission event
     - Google Tag Manager event trigger
   - **Phone call tracking**: 
     - Call from ads (call extension clicks)
     - Calls from website (Google forwarding number or call tracking via the website's click-to-call link)
   - Tell me exactly how to set each one up step by step

3. **If conversion actions exist but show "No recent conversions" or "Tag inactive":**
   - The tag is probably not installed on the website or is firing incorrectly
   - Check: Is the Google Ads tag / Global site tag (gtag.js) installed on stuccoaustin.com?
   - Check: Is the conversion linker tag present?
   - Check: Does the tag ID match the account?
   - Tell me what's broken and how to fix it

4. **If conversion actions exist and show "Active":**
   - Check the conversion count for the last 30 days — is it actually recording conversions?
   - Is the conversion action included in the "Conversions" column? (It might be tracking but set to "Secondary" so it's not reporting in the main column)
   - Are the conversion values realistic?

5. **Check Google Tag setup**: Go to **Tools & Settings > Data manager > Google tag**
   - Is a Google tag installed? What's the tag ID?
   - What domains is it detected on?
   - Are there any tag diagnostics warnings?

**CRITICAL: Also check if Enhanced Conversions are set up.** Without them, many conversions are lost to cookie restrictions and privacy controls. If not enabled, explain exactly how to enable them.

---

### SECTION 2: LANDING PAGE AUDIT

Go to **Campaigns > [each campaign] > Ads & extensions > Assets** or check the final URLs on the ads.

**Report:**

1. **What URLs are the ads sending traffic to?** List every unique landing page URL being used across all ads.

2. **For each landing page, check:**
   - Does the URL actually load? (No 404, no redirect chains, no broken page)
   - Does it match the ad's promise? If the ad says "Stucco Repair Austin" does it land on the repair page, or the homepage?
   - Is there a clear call-to-action (CTA) visible without scrolling? 
   - Is the phone number clickable on mobile?
   - Is there a contact form on the page or a clear path to one?
   - Does the page load fast on mobile? (Slow pages = bounces = no leads)

3. **Landing page alignment check:**
   - Ads about stucco repair → should land on `/austin-stucco-repair` (NOT the homepage)
   - Ads about stucco installation → should land on `/austin-stucco-installation`
   - Ads about EIFS → should land on `/eifs-contractor-austin`
   - Ads about stucco cost → should land on the relevant cost guide blog post
   - If ALL ads point to the homepage, that's a major problem — recommend specific landing page assignments

4. **Check the contact page (`/contact`):**
   - Visit it. Does the form actually work? Can you see a form with fields?
   - Is there a confirmation/thank-you page after submission, or does it just clear the form?
   - If there's no thank-you page or clear success state, conversion tracking may not have a trigger point

---

### SECTION 3: CAMPAIGN STRUCTURE & SETTINGS

Go to **Campaigns** and review each campaign.

**For each campaign, report:**

1. **Campaign type**: Search, Display, Performance Max, Video, etc.
   - If there are Display or Video campaigns running for a local service business, flag this — they generate impressions and clicks but almost never leads for contractors. Recommend pausing them and reallocating budget to Search.
   - If it's Performance Max, check if it's actually generating Search impressions or just Display/YouTube waste

2. **Campaign settings:**
   - **Bidding strategy**: What is it? (Maximize clicks, Maximize conversions, Target CPA, Manual CPC, etc.)
     - If it's "Maximize clicks" — this is likely a major problem. The algorithm optimizes for cheap clicks, not leads. Recommend switching to "Maximize conversions" (but ONLY after conversion tracking is fixed — otherwise the algorithm has no signal)
     - If it's "Maximize conversions" but conversion tracking is broken, the algorithm is flying blind
   - **Network settings**: Is Search Partners enabled? Is Display Network enabled?
     - If Display Network is checked on a Search campaign, TURN IT OFF — it bleeds budget into low-quality Display clicks that never convert
   - **Location targeting**: 
     - What locations are targeted?
     - CRITICAL: Is it set to "Presence: People IN your targeted locations" or "Presence or interest: People in or who show interest in your targeted locations"?
     - If it's "Presence or interest" — this means people anywhere in the world who searched for "stucco Austin" can see the ad. For a local service business, it MUST be "Presence" only. This is a very common source of wasted clicks.
   - **Budget**: Daily budget for each campaign
   - **Ad schedule**: Are ads running 24/7 or during business hours? For a contractor, evenings and weekends still generate leads, but late night (12am-5am) usually doesn't

3. **Audience segments**: Are any audiences applied? Observation or Targeting mode?

---

### SECTION 4: AD GROUP & KEYWORD AUDIT

For each campaign, go into the ad groups and keywords.

**Report:**

1. **Keyword match types**: List the match types being used (Broad, Phrase, Exact)
   - If ALL keywords are Broad match, flag this — broad match pulls in irrelevant searches that click but never convert
   - Recommend a mix of Phrase and Exact for a local service business

2. **Search terms report**: Go to **Keywords > Search terms** (last 30 days)
   - Are people actually searching for stucco services, or is the account matching to unrelated queries?
   - List the top 20 search terms by spend
   - Flag any irrelevant search terms that are wasting budget (e.g., "stucco DIY", "stucco paint colors", "stucco jobs hiring", "stucco near me" matching to a city nowhere near Austin)
   - Recommend specific negative keywords to add

3. **Negative keywords**: Go to **Keywords > Negative keywords**
   - Are there ANY negative keywords set up?
   - If not, recommend a starter negative keyword list for a stucco contractor:
     - DIY, how to, tutorial, youtube, video
     - jobs, hiring, career, salary, apprentice
     - supply, supplier, wholesale, materials (unless they sell materials)
     - free, cheap (depending on positioning)
     - [cities outside service area]
   - Check for negative keyword conflicts — is a negative blocking a term we want?

4. **Quality Score**: Check the Quality Score column for top keywords
   - Any keywords below 5/10? List them with their landing page experience, ad relevance, and expected CTR ratings
   - Low Quality Score = higher CPC and worse ad positions, which compounds the no-lead problem

---

### SECTION 5: AD COPY AUDIT

Review the ads in each ad group.

**Report:**

1. **Ad types**: Are these Responsive Search Ads (RSAs)? Any legacy Expanded Text Ads still running?

2. **For each RSA, check:**
   - Do headlines mention Austin/local area?
   - Do headlines include a clear service (stucco repair, stucco installation)?
   - Is there a CTA in the headlines? ("Free Estimate", "Call Now", "Get a Quote")
   - Do descriptions mention differentiators (licensed, insured, warranty, years of experience)?
   - Ad strength rating (Poor, Average, Good, Excellent) — flag any Poor or Average

3. **Ad extensions/assets**: Go to **Ads & assets > Assets**
   - **Sitelink extensions**: Are they set up? Do they link to relevant pages (Repair, Installation, EIFS, Contact, Cost Guide)?
   - **Call extensions**: Is there a phone number? Is it the business number? Is call reporting enabled?
   - **Location extensions**: Is the Google Business Profile linked? Does the address show?
   - **Callout extensions**: Are there callouts like "Free Estimates", "Licensed & Insured", "5-Star Reviews"?
   - **Structured snippets**: Service types listed?
   - **Lead form extensions**: Are these set up? If not, they're a direct way to capture leads right in the ad without needing the website
   
   Missing extensions = fewer touchpoints = fewer leads. List every missing extension and what to add.

4. **Call-to-action alignment**: Does the ad say "Call Now" but the landing page buries the phone number? Does it say "Get a Free Estimate" but the landing page doesn't have a form above the fold?

---

### SECTION 6: AUDIENCE & TARGETING

Go to **Audiences, keywords, and content > Audiences**.

**Report:**

1. Are any audience segments applied to campaigns?
2. Are they in Observation or Targeting mode?
   - If Targeting mode with narrow audiences on a Search campaign, this severely limits reach
3. Recommend adding these as Observation audiences to see how they perform:
   - In-market: Home improvement, Home services
   - Custom segments: People who searched for stucco-related terms
   - Remarketing lists (if any website visitors are being collected)

---

### SECTION 7: DEVICE & DEMOGRAPHIC PERFORMANCE

Go to **Campaigns > [campaign] > Demographics** and **Devices**.

**Report:**

1. **Device breakdown**: Clicks, impressions, CTR, cost, conversions by device (Mobile, Desktop, Tablet)
   - If mobile has high clicks but zero conversions, the mobile landing page experience is broken
   - If mobile CPC is much higher, consider bid adjustments
   
2. **Demographics**: Age, gender, household income breakdown
   - Any demographics consuming budget with zero conversions?
   - Recommend excluding age groups that don't convert (e.g., 18-24 rarely needs stucco services)
   - For a contractor in Austin, household income data can help — higher income brackets are more likely to invest in stucco

---

### SECTION 8: ACCOUNT-LEVEL SETTINGS

Check **Tools & Settings > Account settings** and **Billing**.

**Report:**

1. **Auto-applied recommendations**: Go to **Recommendations > Auto-apply**
   - Is Google auto-applying changes? Which ones?
   - TURN OFF any auto-apply that adds broad match keywords, creates new ads, or adjusts budgets — Google's auto-optimizations often hurt local service businesses
   
2. **Account status**: Is the account in good standing? Any policy violations, disapproved ads, limited campaigns?

3. **Billing**: Is the payment method active? Has it been declined recently? (A declined payment pauses all ads)

---

## OUTPUT FORMAT

Organize findings into these categories:

### 🔴 CONVERSION TRACKING ISSUES (fix these FIRST)
For each issue:
- What's broken
- Exact steps to fix it
- Expected impact

### 🟠 CAMPAIGN SETTINGS PROBLEMS
For each issue:
- Current setting → Recommended setting
- Why this matters for lead generation
- How to change it (exact navigation path in Google Ads)

### 🟡 TARGETING & KEYWORD ISSUES  
For each issue:
- What's wrong
- Specific keywords/terms to add or remove
- Negative keyword recommendations

### 🟢 AD COPY & EXTENSION IMPROVEMENTS
For each issue:
- Current state
- Recommended changes with example text
- Missing extensions to add

### PRIORITY ACTION PLAN
Number the fixes 1-10 in the exact order they should be done. The most common fix sequence for "clicks but no leads" is:

1. Fix conversion tracking (so we can measure leads)
2. Fix landing page alignment (so clicks go to relevant pages)
3. Remove Display Network from Search campaigns
4. Change location targeting to "Presence" only
5. Add negative keywords
6. Switch bidding to Maximize Conversions (after tracking is live for 1-2 weeks)
7. Tighten match types
8. Add missing ad extensions
9. Set up remarketing
10. Optimize ad copy

But adjust based on what you actually find — some of these may already be correct.

### ESTIMATED IMPACT
For each fix, estimate whether it's:
- **Immediate** (will see leads within days)
- **Short-term** (1-2 weeks)
- **Medium-term** (2-4 weeks as algorithm learns)

---

## BUSINESS CONTEXT

- **Business**: Star Stucco of Austin
- **Website**: www.stuccoaustin.com
- **Contact page**: www.stuccoaustin.com/contact (has a form powered by Supabase)
- **Phone**: Listed on website, should be used in call extensions
- **Services**: Stucco repair, stucco installation, EIFS/synthetic stucco, stucco remediation, commercial stucco, popcorn ceiling removal
- **Service area**: Austin TX, Travis County, and surrounding cities (Round Rock, Cedar Park, Pflugerville, Georgetown, San Marcos, Lakeway, Bee Cave, Dripping Springs, Kyle, Buda, Leander, Liberty Hill, Hutto, Manor, Bastrop)
- **Ideal landing pages by service**:
  - Stucco repair keywords → `www.stuccoaustin.com/austin-stucco-repair`
  - Stucco installation keywords → `www.stuccoaustin.com/austin-stucco-installation`
  - EIFS/Dryvit keywords → `www.stuccoaustin.com/eifs-contractor-austin`
  - Stucco cost keywords → `www.stuccoaustin.com/blog/stucco-repair-cost-austin` or `www.stuccoaustin.com/blog/cost-to-stucco-a-house-austin`
  - Popcorn ceiling keywords → `www.stuccoaustin.com/blog/popcorn-ceiling-removal-cost-austin`
  - General/brand keywords → `www.stuccoaustin.com/`
- **The website is a React SPA with server-side rendered HTML**. The contact form submits to Supabase. There is no traditional thank-you page redirect after submission — keep this in mind for conversion tracking setup.
- **Goal**: Get contact form submissions and phone calls from people who need stucco work in the Austin area. Every fix should be evaluated against this goal.

Be ruthlessly specific. If conversion tracking is missing, give me the exact steps to set it up for this specific website. If keywords are wrong, name them. If settings are misconfigured, tell me which toggle to flip and where to find it.
