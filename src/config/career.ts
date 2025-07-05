// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'XDU华为创新俱乐部',
      title: '算法组组长',
      logo: 'college',
      start: '2025',
      end: '2026'
    },
    {
      company: 'XDU腾讯创新俱乐部',
      title: '技术部副部长',
      logo: 'college',
      start: '2025',
      end: '2026'
    }
  ]