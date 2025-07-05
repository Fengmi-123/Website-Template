export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Star_t 枫蜜123'
export const headline = 'Welcome to my blog - Cassiel Li.'
export const introduction = [
  "—— Where the heart yearns, there lies light.  ",
  "—— As long as starlights glimmers, hope shall take flight. ",
  "—— Though dawn has yet to break, our steps march on. ",
  "—— What's past is prologue - a new day has begun. "
]
export const email = '1739138545@qq.com'
export const githubUsername = 'Fengmi-123'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "心之所向，便是光明",
  "星光未灭，希望永存"
]

// blog
export const blogHeadLine = "What I've thinking and learning about."
export const blogIntro =
  "I've written something about AI, algorithm, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/335106017',
  },
  {
    name: 'github',
    icon: 'github',
    href: 'https://github.com/Fengmi-123',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
