import type { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'

import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-01-10T00:00:00.000.Z',
      '2022-01-11T00:00:00.000.Z',
      '2022-01-12T00:00:00.000.Z',
      '2022-01-13T00:00:00.000.Z',
      '2022-01-14T00:00:00.000.Z',
      '2022-01-15T00:00:00.000.Z',
      '2022-01-16T00:00:00.000.Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
}

const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 51, 18, 109],
  },
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="300px" align="flex-start">
          <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box p={['6', '8']} bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
