import Orfanate from '../models/orfanage';
import imagesView from './images_view';

export default {
    render(orfanate: Orfanate) {
    	return {
             id: orfanate.id,
             name: orfanate.name,             
             latitude: orfanate.latitude,
             longitude: orfanate.longitude,
             about: orfanate.about,
             instructions: orfanate.instructions,
             open_hour: orfanate.open_hour,
             open_on_weekends: orfanate.open_on_weekends,
             images: imagesView.renderMany(orfanate.images)
    	}
    },

    renderMany(orfanates: Orfanate[]) {
    	return orfanates.map(orfanate => this.render(orfanate));
    }
};