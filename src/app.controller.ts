import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import axios from "axios";


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('movies')
  async getMoviesData(@Query('Year') Year) {
    let moviesUrl = null;
    if (Year && !isNaN(Year)) {
      moviesUrl = 'https://jsonmock.hackerrank.com/api/movies?Year='+Year;
    } else {
      moviesUrl = 'https://jsonmock.hackerrank.com/api/movies';
    }
    try {
      const response = await axios.get(
        moviesUrl
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }


  @Get('/graph-data/line-series/count')
  getGraphDataLineSeriesCount() {
    return Math.round(Math.random()*10);
  }
}
