import {LogoApiService} from '../../shared/services/logo-api.service';
import {SourceResource, SourcesResponse} from './sources.response';
import {Source} from '../model/source.entity';

export class SourceAssembler {

  static logoApiService: LogoApiService;

  static withLogoApiService(logoApiService: LogoApiService) {
    this.logoApiService = logoApiService;
    return this;
  }

  static toEntityFromResource(resource: SourceResource): Source {
    return {
      id: resource.id,
      name: resource.name,
      url: resource.url || '',
      author: resource.author,
      urlToLogo: this.logoApiService.getUrlToLogo(resource)
    };
  }

  static ToEntitiesFromResponse(response: SourcesResponse): Source[] {
    return response.sources.map(source => this.toEntityFromResource(source));
  }
}
