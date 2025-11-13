# bucc website

modern, dynamic website for babcock university computer club (bucc). built with next.js 16, typescript, and tailwind css.

## overview

where ideas become impact. this is the official website for bucc, featuring event management, blog posts, leadership profiles, and a comprehensive admin panel for content management.

## features

### public facing
- responsive home page with interactive animations
- events showcase with detailed event pages
- blog system with rich content support
- leadership team profiles
- photo gallery
- membership application form
- partner organizations showcase

### admin panel
- secure authentication system
- dashboard with analytics overview
- full crud operations for:
  - events management
  - blog posts
  - leadership profiles
  - partner organizations
- media library for image management
- application review system
- partnership inquiry management
- email system with emailjs templates
- vercel analytics integration
- settings configuration

## tech stack

- **framework**: next.js 16 (app router)
- **language**: typescript
- **styling**: tailwind css
- **ui components**: shadcn/ui
- **icons**: heroicons
- **animations**: framer motion
- **analytics**: vercel analytics
- **deployment**: vercel

## getting started

### prerequisites

- node.js 18+ or bun
- pnpm (recommended) or npm

### installation

1. clone the repository
```bash
git clone https://github.com/prinxocoding/bucc-website.git
cd bucc-website
```

2. install dependencies
```bash
pnpm install
```

3. run the development server
```bash
pnpm dev
```

4. open [http://localhost:3000](http://localhost:3000) in your browser

### build for production

```bash
pnpm build
```

### start production server

```bash
pnpm start
```

## project structure

```
bucc-website/
├── app/                    # next.js app router
│   ├── admin/             # admin panel routes
│   ├── blog/              # blog pages
│   ├── events/            # events pages
│   ├── leadership/        # leadership page
│   └── ...                # other public pages
├── components/            # react components
│   ├── ui/               # shadcn ui components
│   └── ...               # custom components
├── data/                  # static data files
├── hooks/                 # custom react hooks
├── lib/                   # utility functions
├── public/                # static assets
└── styles/                # global styles
```

## admin access

### demo credentials
- email: princesochimaobim@gmail.com
- password: princeisanadmin

access the admin panel at `/admin/login`

## configuration guides

- **lanyard setup**: see [LANYARD_SETUP.md](./LANYARD_SETUP.md) for discord presence integration
- **leadership data**: see [LEADERSHIP_DATA_GUIDE.md](./LEADERSHIP_DATA_GUIDE.md) for managing team profiles

## deployment

this project is optimized for deployment on vercel:

1. push your code to github
2. import project in vercel dashboard
3. configure environment variables (if any)
4. deploy

the site will automatically deploy on every push to the main branch.

## email system

the admin panel includes an email system powered by emailjs. to set up:

1. create an emailjs account at [emailjs.com](https://emailjs.com)
2. create email templates matching the template ids in the code
3. add your service id, template ids, and public key
4. configure recipient groups and email lists

## contributing

contributions are welcome. please follow these steps:

1. fork the repository
2. create a feature branch (`git checkout -b feature/amazing-feature`)
3. commit your changes (`git commit -m 'add amazing feature'`)
4. push to the branch (`git push origin feature/amazing-feature`)
5. open a pull request

## license

this project is built for babcock university computer club (bucc).

## credits

**developer**: prince  
**website**: [prince-the.dev](https://prince-the.dev)  
**organization**: babcock university computer club (bucc)

## support

for issues, questions, or suggestions, please contact the bucc team or open an issue on github.

---

built with care by prince for bucc community.
