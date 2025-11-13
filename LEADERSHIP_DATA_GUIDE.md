# bucc leadership data population guide

this guide explains how to populate and manage leadership data for the bucc website's leadership page.

---

## file structure

All leadership data is stored in JSON files in the `/data` directory:

```
data/
  ├── leadership-2025.json    (Current year - active by default)
  ├── leadership-2024.json    (Previous year)
  ├── leadership-2023.json    (Older years, if needed)
  └── ...
```

---

## json structure overview

each year file follows the same structure with three main sections:

1. executives - the executive board (president, vp, gs, treasurer, etc.)
2. senators - student representatives organized by level (100, 200, 300, 400)
3. committees - specialized teams (development, media, welfare, etc.)

---

## complete data schema

### Root Structure

```json
{
  "year": 2025,
  "executives": [...],
  "senators": {...},
  "committees": {...}
}
```

---

## executive board members

**location:** `executives` array  
**display:** 3-column grid (2 on tablet, 1 on mobile)  
**count:** typically 6-8 positions

### required fields

```json
{
  "id": "unique-id-here",           // Unique identifier (e.g., "pres-2025")
  "name": "Full Name",              // Person's full name
  "position": "President",          // Official title
  "photo": "/images/leaders/photo.jpg", // Path to photo (see Image Guide below)
  "level": "400 Level",             // Academic level
  "department": "Computer Science", // Department/Faculty
  "shortBio": "Brief one-liner",    // 1-2 sentences for card display
  "fullBio": "Longer biography",    // 2-3 paragraphs for modal
  "achievements": [                 // Array of accomplishments
    "Achievement 1",
    "Achievement 2"
  ],
  "currentProjects": [              // Array of ongoing work
    "Project 1",
    "Project 2"
  ],
  "askMeAbout": [                   // Array of expertise topics
    "Topic 1",
    "Topic 2"
  ],
  "contact": {                      // Contact information
    "email": "person@example.com",
    "linkedin": "linkedin.com/in/username",  // Optional
    "twitter": "@username"                    // Optional
  }
}
```

### example executive entry

```json
{
  "id": "president-2025",
  "name": "John Doe",
  "position": "President",
  "photo": "/images/leaders/john-doe.jpg",
  "level": "400 Level",
  "department": "Computer Science",
  "shortBio": "Leading BUCC into its most ambitious year yet, focusing on industry partnerships and technical excellence.",
  "fullBio": "John is a 400-level Computer Science student with a passion for community building and technical education. He has been with BUCC since his first year, starting as a member and working his way up through various leadership roles. His vision for BUCC centers on creating more industry connections and expanding our technical training programs.",
  "achievements": [
    "Increased membership by 40% in 2024",
    "Secured partnerships with 5 major tech companies",
    "Led the development of BUCC's new mentorship program"
  ],
  "currentProjects": [
    "Launching BUCC Industry Connect program",
    "Organizing BUCC's 10th Anniversary celebration",
    "Building partnerships with international computing societies"
  ],
  "askMeAbout": [
    "Leadership & Community Building",
    "Web Development",
    "Tech Career Advice",
    "Student Organization Management"
  ],
  "contact": {
    "email": "president@buccclub.org",
    "linkedin": "linkedin.com/in/johndoe",
    "twitter": "@johndoe"
  }
}
```

---

## senators

**location:** `senators` object  
**display:** organized by level, 4-column grid (3 on tablet, 2 on mobile)  
**count:** typically 2 senators per level = 8 total

### structure

```json
"senators": {
  "100": [...],  // 100 Level senators
  "200": [...],  // 200 Level senators
  "300": [...],  // 300 Level senators
  "400": [...]   // 400 Level senators
}
```

### senator entry (simplified)

senators have fewer details than executives:

```json
{
  "id": "senator-100-1",
  "name": "Jane Smith",
  "position": "Senator, 100 Level",
  "photo": "/images/leaders/jane-smith.jpg",
  "level": "100 Level",
  "department": "Information Technology",
  "shortBio": "Representing first-year students and championing beginner-friendly initiatives.",
  "fullBio": "Jane is passionate about making BUCC accessible to newcomers. She's working on peer mentorship programs and introductory workshops.",
  "contact": {
    "email": "jane.smith@student.edu"
  }
}
```

### complete senators example

```json
"senators": {
  "100": [
    {
      "id": "senator-100-1",
      "name": "Jane Smith",
      "position": "Senator, 100 Level",
      "photo": "/images/leaders/jane-smith.jpg",
      "level": "100 Level",
      "department": "Information Technology",
      "shortBio": "Representing first-year students.",
      "fullBio": "Jane is passionate about making BUCC accessible to newcomers.",
      "contact": { "email": "jane@student.edu" }
    },
    {
      "id": "senator-100-2",
      "name": "Mike Johnson",
      "position": "Senator, 100 Level",
      "photo": "/images/leaders/mike-johnson.jpg",
      "level": "100 Level",
      "department": "Computer Science",
      "shortBio": "Advocating for first-year student needs.",
      "fullBio": "Mike focuses on orientation programs and peer support.",
      "contact": { "email": "mike@student.edu" }
    }
  ],
  "200": [...],
  "300": [...],
  "400": [...]
}
```

---

## committees

**location:** `committees` object  
**display:** organized by committee type, 4-column member grid  
**common committees:** development, media, welfare

### structure

```json
"committees": {
  "development": {
    "name": "Development Committee",
    "description": "Building and maintaining BUCC's digital infrastructure.",
    "members": [...]
  },
  "media": {
    "name": "Media & Communications Committee",
    "description": "Telling BUCC's story through content and design.",
    "members": [...]
  },
  "welfare": {
    "name": "Welfare Committee",
    "description": "Supporting member wellbeing and community care.",
    "members": [...]
  }
}
```

### committee member entry

committee members have minimal information:

```json
{
  "id": "dev-member-1",
  "name": "Sarah Williams",
  "role": "Lead Developer",          // Role within committee
  "photo": "/images/leaders/sarah.jpg",
  "department": "Computer Science"
}
```

### complete committee example

```json
"committees": {
  "development": {
    "name": "Development Committee",
    "description": "Building and maintaining BUCC's digital infrastructure, from the website to internal tools.",
    "members": [
      {
        "id": "dev-member-1",
        "name": "Sarah Williams",
        "role": "Lead Developer",
        "photo": "/images/leaders/sarah.jpg",
        "department": "Computer Science"
      },
      {
        "id": "dev-member-2",
        "name": "David Chen",
        "role": "Frontend Developer",
        "photo": "/images/leaders/david.jpg",
        "department": "Software Engineering"
      },
      {
        "id": "dev-member-3",
        "name": "Emily Brown",
        "role": "Backend Developer",
        "photo": "/images/leaders/emily.jpg",
        "department": "Computer Science"
      }
    ]
  }
}
```

---

## image management guide

### image specifications

- format: jpg or png
- recommended size: 800x1000px (4:5 aspect ratio)
- max file size: keep under 500kb
- orientation: portrait (vertical)
- quality: high-resolution, professional-looking

### where to store images

```
public/
  └── images/
      └── leaders/
          ├── 2025/           (Organized by year)
          │   ├── john-doe.jpg
          │   ├── jane-smith.jpg
          │   └── ...
          ├── 2024/
          │   └── ...
          └── placeholder.jpg  (Default placeholder)
```

### naming convention

use lowercase with hyphens:
- ✅ `john-doe.jpg`
- ✅ `sarah-williams.jpg`
- ❌ `John Doe.jpg`
- ❌ `sarah_williams.JPG`

### using placeholder images

for testing or when photos aren't available yet:

```json
"photo": "/images/leaders/placeholder.jpg"
```

Or use a placeholder service:
```json
"photo": "https://ui-avatars.com/api/?name=John+Doe&size=400&background=0A1F44&color=fff"
```

---

## creating new year data

### step 1: duplicate previous year

```powershell
# PowerShell
Copy-Item ".\data\leadership-2025.json" -Destination ".\data\leadership-2026.json"
```

### step 2: update year field

```json
{
  "year": 2026,  // Update this
  "executives": [...],
  "senators": {...},
  "committees": {...}
}
```

### step 3: update all member data

replace names, photos, positions, bios, etc. with new leadership info.

### step 4: update leadership page

Open `app/leadership/page.tsx` and add the new year to imports:

```typescript
// Add new import
import leadershipData2026 from "@/data/leadership-2026.json"
import leadershipData2025 from "@/data/leadership-2025.json"
import leadershipData2024 from "@/data/leadership-2024.json"

// Update state management
const [selectedYear, setSelectedYear] = useState<number>(2026) // Default to newest

// Add conditional data loading
const currentData = 
  selectedYear === 2026 ? leadershipData2026 :
  selectedYear === 2025 ? leadershipData2025 :
  leadershipData2024
```

### step 5: add year selector button

```typescript
<button
  data-cursor="block"
  onClick={() => setSelectedYear(2026)}
  className={`px-8 py-3 font-bold text-lg transition-all ${
    selectedYear === 2026
      ? "bg-blue-600 text-white"
      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
  }`}
>
  2026
</button>
```

---

## complete template for new year

save this as `data/leadership-YYYY.json`:

```json
{
  "year": 2025,
  "executives": [
    {
      "id": "president-2025",
      "name": "Full Name",
      "position": "President",
      "photo": "/images/leaders/2025/name.jpg",
      "level": "400 Level",
      "department": "Computer Science",
      "shortBio": "One-liner about leadership focus.",
      "fullBio": "2-3 paragraphs about background, journey, and vision.",
      "achievements": [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3"
      ],
      "currentProjects": [
        "Project 1",
        "Project 2"
      ],
      "askMeAbout": [
        "Topic 1",
        "Topic 2",
        "Topic 3"
      ],
      "contact": {
        "email": "email@example.com",
        "linkedin": "linkedin.com/in/username",
        "twitter": "@username"
      }
    }
    // Add 5-7 more executive positions
  ],
  "senators": {
    "100": [
      {
        "id": "senator-100-1",
        "name": "Full Name",
        "position": "Senator, 100 Level",
        "photo": "/images/leaders/2025/name.jpg",
        "level": "100 Level",
        "department": "Department Name",
        "shortBio": "Brief description.",
        "fullBio": "Longer description.",
        "contact": { "email": "email@example.com" }
      },
      {
        "id": "senator-100-2",
        "name": "Full Name",
        "position": "Senator, 100 Level",
        "photo": "/images/leaders/2025/name.jpg",
        "level": "100 Level",
        "department": "Department Name",
        "shortBio": "Brief description.",
        "fullBio": "Longer description.",
        "contact": { "email": "email@example.com" }
      }
    ],
    "200": [
      // 2 senators
    ],
    "300": [
      // 2 senators
    ],
    "400": [
      // 2 senators
    ]
  },
  "committees": {
    "development": {
      "name": "Development Committee",
      "description": "Building and maintaining BUCC's digital infrastructure.",
      "members": [
        {
          "id": "dev-1",
          "name": "Full Name",
          "role": "Lead Developer",
          "photo": "/images/leaders/2025/name.jpg",
          "department": "Computer Science"
        }
        // Add 3-5 more members
      ]
    },
    "media": {
      "name": "Media & Communications Committee",
      "description": "Telling BUCC's story through content and design.",
      "members": [
        // 3-5 members
      ]
    },
    "welfare": {
      "name": "Welfare Committee",
      "description": "Supporting member wellbeing and community care.",
      "members": [
        // 3-5 members
      ]
    }
  }
}
```

---

## data collection checklist

when gathering information from new leadership:

### for executive board members
- [ ] Full legal name
- [ ] Official position/title
- [ ] High-quality professional photo (800x1000px)
- [ ] Current level (100/200/300/400)
- [ ] Department/Faculty
- [ ] Short bio (1-2 sentences)
- [ ] Full bio (2-3 paragraphs)
- [ ] 3-5 key achievements
- [ ] 2-3 current projects
- [ ] 3-5 "Ask me about" topics
- [ ] Official email address
- [ ] LinkedIn profile (optional)
- [ ] Twitter handle (optional)

### for senators
- [ ] Full name
- [ ] Professional photo
- [ ] Level (must match 100/200/300/400)
- [ ] Department
- [ ] Short bio
- [ ] Email address

### for committee members
- [ ] Full name
- [ ] Role within committee
- [ ] Photo
- [ ] Department

---

## quick start: populating 2024 data

1. create the file:
   ```powershell
   Copy-Item ".\data\leadership-2025.json" -Destination ".\data\leadership-2024.json"
   ```

2. update year field to 2024

3. replace all member data with 2024 leadership info

4. update photos to 2024 images:
   ```
   /images/leaders/2024/president-name.jpg
   /images/leaders/2024/vp-name.jpg
   etc.
   ```

5. import in leadership page:
   ```typescript
   import leadershipData2024 from "@/data/leadership-2024.json"
   ```

6. add conditional rendering:
   ```typescript
   const currentData = selectedYear === 2025 ? leadershipData : leadershipData2024
   
   // Then use currentData instead of leadershipData throughout
   currentData.executives.map(...)
   currentData.senators[level].map(...)
   ```

---

## validation

before deploying, verify:

- [ ] All IDs are unique within the file
- [ ] All required fields are present
- [ ] Photo paths are correct and images exist
- [ ] Email addresses are valid
- [ ] JSON is properly formatted (no trailing commas)
- [ ] Year field matches filename
- [ ] All names are spelled correctly
- [ ] Bios are appropriate length and professional

validate json:
```powershell
# Test if JSON is valid
Get-Content .\data\leadership-2025.json | ConvertFrom-Json
```

---

## pro tips

1. use a json validator before committing changes
2. keep backups of previous year data
3. optimize images before uploading (use tools like tinypng)
4. get approval from leadership before publishing profiles
5. update annually at the start of each term
6. consistent formatting - use the same photo style/background
7. archive old years - don't delete, just move to archive

---

## common issues

### issue: photos not displaying
fix - check that:
- File path matches exactly (case-sensitive)
- Image exists in `public/images/leaders/`
- File extension is correct (.jpg vs .jpeg)

### issue: json parsing error
fix:
- Remove trailing commas
- Check all quotes are properly closed
- Validate with a JSON linter

### issue: modal not opening
fix:
- Verify all required fields are present
- Check TypeScript types match data structure

---

## need help?

- technical issues: contact director of technology
- content questions: contact general secretary
- photo requests: contact media committee

---

last updated: november 2025  
maintained by: bucc development committee
