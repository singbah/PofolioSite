

const commentData = {
  username: '',
  comment: '',
  email:""
}

let submitCommit = document.getElementById("submitCommit")

function handelForm() {
  event.preventDefault();
  const { name, value } = event.target;
  commentData[name] += value;
  if (name === 'email') {
    submitCommit.href = `mailto:singbahjohn@gmail.com`
    console.log(submitCommit)
  } else if (name === 'comment') {
    submitCommit.href = `mailto:singbahjohn@gmail.com?subject=comment&body=${value}`
    console.log(submitCommit)
  }
}

function commingSoon() {
  alert("This feature is comming soon")
}