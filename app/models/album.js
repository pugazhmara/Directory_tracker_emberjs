
import Model, { attr } from '@ember-data/model';

export default class AlbumModel extends Model {

        @attr('string') type;
        @attr('string') attributes;
        @attr('string') relationships;


}
