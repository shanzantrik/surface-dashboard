// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Award = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <Typography variant='h5'>Most Critical Vulnerability 👾</Typography>
          <Typography>Across all Inventory Assets</Typography>
        </div>
        <div>
          <Typography variant='h4' color='primary'>
            Domain: www.abc.com
          </Typography>
          <Typography>SSL Certificate Expired on 2024-05-01 🚀</Typography>
          <Typography>Get a detailed report on domains SSL <br/> certificate expiry.</Typography>
        </div>
        <Button size='small' variant='contained'>
          View Details...
        </Button>
        <img
          src='/images/pages/ssl-certificate.png'
          alt='ssl-certificate image'
          height={102}
          className='absolute inline-end-7 bottom-6'
        />
      </CardContent>
    </Card>
  )
}

export default Award
