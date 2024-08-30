import { IncomingMessage, ServerResponse } from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { PodcastTransferModel } from '../models/podcast-transfer-model';

const DEFAULT_CONTENT = { "Content-Type": ContentType.JSON };

export const getListEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse
) => {
    const content: PodcastTransferModel = await serviceListEpisodes();

    response.writeHead(content.statusCode, DEFAULT_CONTENT);
    response.write(JSON.stringify(content.body));

    response.end();
};

export const getFilterEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse
) => {


    const content: PodcastTransferModel = await serviceFilterEpisodes(request.url);

    response.writeHead(content.statusCode, DEFAULT_CONTENT);
    response.write(JSON.stringify(content.body));

    response.end();
};