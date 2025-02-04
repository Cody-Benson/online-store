import {Controller, Get, Render, Req} from '@nestjs/common';
import { OrdersService } from 'src/models/orders.service';

@Controller('account')
export class AccountController {
    constructor(private readonly ordersService: OrdersService) {}

    @Get('/orders')
    @Render('account/orders')
    async orders(@Req() request) {
        const viewData = [];
        viewData['title'] = 'Orders - Online Store';
        viewData['subtitle'] = 'My Orders';
        viewData['orders'] = await this.ordersService.findByUserId(request.session.user.id);
        return {
            viewData: viewData,
        }
    }
}