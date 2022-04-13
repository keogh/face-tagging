import { getFaceapi } from ".";

const UNKNOWN = 'unknown'

export async function FaceMatcher({ labeledDescriptors = [] }) {
  const faceapi = await getFaceapi()
  
  let fm = null
  let number = 0

  function addLabeledDescriptor({ descriptor, label = null }) {
    const _label = label || `Face ${number++}`
    const ld = new faceapi.LabeledFaceDescriptors(
      _label,
      [descriptor]
    )
    labeledDescriptors.push(ld)

    return new faceapi.FaceMatcher(labeledDescriptors)
  }

  const add = ({ descriptor }) => {
    console.log('add descriptor: ', descriptor)
    if (fm === null) {
      fm = addLabeledDescriptor({ descriptor })
    }
    
    let bestMatch = fm.findBestMatch(descriptor)
    if (bestMatch.label === UNKNOWN) {
      fm = addLabeledDescriptor({ descriptor })
      bestMatch = fm.findBestMatch(descriptor)
    }

    return bestMatch
  }

  return {
    add,
    labeledDescriptors,
  }
}
