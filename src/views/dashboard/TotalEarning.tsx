// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import LinearProgress from '@mui/material/LinearProgress'

import Typography from '@mui/material/Typography'

// Type Imports
import type { ThemeColor } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'

type DataType = {
  title: string
  imgSrc: string
  amount: string
  progress: number
  subtitle: string
  color?: ThemeColor
}

// Vars
const data: DataType[] = [
  {
    progress: 45,
    color: 'error',
    title: 'Wordpress Websites',
    amount: '48',
    subtitle: 'PHP, Mysql, reactjs',
    imgSrc: '/images/cards/zipcar.png'
  },
  {
    progress: 28,
    color: 'error',
    title: 'API Endpoints',
    amount: '28',
    subtitle: 'Nodejs, Expressjs, Mongodb',
    imgSrc: '/images/cards/bitbank.png'
  },
  {
    progress: 20,
    title: 'Salesforce',
    color: 'error',
    amount: '20',
    subtitle: 'Salesforce Cloud, Apex',
    imgSrc: '/images/cards/aviato.png'
  },
  {
    progress: 20,
    title: 'SAP',
    color: 'error',
    amount: '20',
    subtitle: 'ABAP, BASIS, CSHARP',
    imgSrc: '/images/cards/aviato.png'
  }
]

const TotalEarning = () => {
  return (
    <Card>
      <CardHeader
        title='Top Applications'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      ></CardHeader>
      <CardContent className='flex flex-col gap-11 md:mbs-2.5'>
        <div>
          <div className='flex items-center'>
            <Typography component='span' color='error.main'>
              Applications with Vulnerabilities
            </Typography>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          {data.map((item, index) => (
            <div key={index} className='flex items-center gap-3'>
              <Avatar src={item.imgSrc} variant='rounded' className='bg-actionHover' />
              <div className='flex justify-between items-center is-full flex-wrap gap-x-4 gap-y-2'>
                <div className='flex flex-col gap-0.5'>
                  <Typography color='text.primary' className='font-medium'>
                    {item.title}
                  </Typography>
                  <Typography>{item.subtitle}</Typography>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                  <Typography color='text.primary' className='font-medium'>
                    {item.amount}
                  </Typography>
                  <LinearProgress
                    variant='determinate'
                    value={item.progress}
                    className='is-20 bs-1'
                    color={item.color}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default TotalEarning
