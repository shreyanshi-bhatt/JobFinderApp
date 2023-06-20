import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./nearbyjobcard.style";
import { checkImageURL } from "../../../../utils";


const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={handleNavigate}
    >

      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{uri: checkImageURL(job.employer_logo)
            ? job.employer_logo
            : 'https://logoregion.com/wp-content/uploads/2019/04/foundwork-1024x1024.jpg'
          }} 
          resizeMode="contain"
          style={styles.logoImage}  
          />
      </TouchableOpacity>


      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>

    </TouchableOpacity>
  )
}

export default NearbyJobCard