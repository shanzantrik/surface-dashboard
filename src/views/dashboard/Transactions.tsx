//MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Type Imports
import type { ThemeColor } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

type DataType = {
  icon: string
  stats: string
  title: string
  color: ThemeColor
}

// Vars
const data: DataType[] = [
  {
    stats: '25',
    title: 'Domains',
    color: 'primary',
    icon: 'ri-pie-chart-2-line'
  },
  {
    stats: '30',
    title: 'Sub Domains',
    color: 'success',
    icon: 'ri-group-line'
  },
  {
    stats: '15',
    color: 'warning',
    title: 'Services',
    icon: 'ri-macbook-line'
  },
  {
    stats: '15',
    color: 'info',
    title: 'Applications',
    icon: 'ri-money-dollar-circle-line'
  },
  {
    stats: '25',
    color: 'info',
    title: 'Certificates',
    icon: 'ri-award-fill'
  },
  {
    stats: '9',
    color: 'warning',
    title: 'APIs',
    icon: 'ri-error-warning-fill'
  },
{
    stats: '68',
    color: 'error',
    title: 'Warnings',
    icon: 'ri-money-dollar-circle-line'
  },
{
    stats: '30',
    color: 'info',
    title: 'IP Addresses',
    icon: 'ri-money-dollar-circle-line'
  }
]

const Transactions = () => {
  return (
    <Card className='bs-full'>
      <CardHeader
        title='Inventory Summary'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Last 28 Days', 'Last Month', 'Last Year']} />}
        subheader={
          <p className='mbs-3'>
            <span className='font-medium text-textPrimary'> 48.5% Growth in Vulnerbailities 👾 </span>
            <span className='text-textSecondary'>from last scan on June 15th, 2024</span>
          </p>
        }
      />
      <CardContent className='!pbs-5'>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={6} md={3} key={index}>
              <div className='flex items-center gap-3'>
                <CustomAvatar variant='rounded' color={item.color} className='shadow-xs'>
                  <i className={item.icon}></i>
                </CustomAvatar>
                <div>
                  <Typography>{item.title}</Typography>
                  <Typography variant='h5'>{item.stats}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Transactions
