import React, { Component } from "react"
import { navigate } from 'gatsby'
import { Toast } from 'atoms'
import { AuthorLayout, AuthorSignInForm } from 'organisms'
import { AVeryGoodAuthenticator } from 'assets-js'
import toastedNotes from 'toasted-notes' 

class AuthorIndexPage extends Component {
	constructor() {
		super()
		this.state = {
			shouldShowSignInForm: false
		}
	}
	componentDidMount() {
		const { verifyAuthentication } = AVeryGoodAuthenticator
		verifyAuthentication().then( result => {
			const { isVerified, message } = result
			if (isVerified) {
				// navigate to dashboard
				navigate('/author/items/', {
					state: { isAuthenticated: isVerified },
					replace: true
				})
			} else {
				if(message) {
					toastedNotes.notify(<Toast message={message} fontIcon="time" />, { duration: 3000 })
				}
				this.setState( { shouldShowSignInForm: true })
			}
		})
	}

	render() {
		const { shouldShowSignInForm } = this.state
		return(
			<AuthorLayout sectionTitle='Sign In'>
				{shouldShowSignInForm && <AuthorSignInForm />}
			</AuthorLayout>
		)
	}
}
export default AuthorIndexPage