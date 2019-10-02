import axios from 'axios';

export default {
  getHospitalsForPatient (illnessId, levelOfPain) {
    return axios
      .post('https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/palo-fylgm/service/ProcessPatient/incoming_webhook/get_hospitals',
            {
            levelOfPain: levelOfPain,
            illnessId: illnessId
            })
      .then(response => response.data)
  },
  getIllnesses () {
    return axios
    .get('https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/palo-fylgm/service/ProcessPatient/incoming_webhook/get_illnesses')
    .then(response => (this.illnesses = response.data))
  }
}
