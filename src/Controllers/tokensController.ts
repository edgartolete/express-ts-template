import { Request, Response } from 'express';
import { ResponseTypes } from '../Utils/constants';
import { JsonResponse } from '../Utils/responseTemplate';

export const tokensController = {
	refresh: (req: Request, res: Response) => {
		try {
			JsonResponse.success(res);
			return;
		} catch (err) {
			JsonResponse.failed(res, err);
		}
	}
};