<<<<<<< HEAD
let tokenName = "workerB";

open("https://github.com/settings/tokens");

const currentUrl = readURL();

if (currentUrl.indexOf("login") === -1) {
  const allTokenNames = readAll("span.token-description a");
  const previousWorkerbTokens = []

  for (const token of allTokenNames) {
    if (token.toLowerCase().indexOf(tokenName) !== -1) {
      previousWorkerbTokens.push(token.trim());
    }
  }

  let workerbToken = !previousWorkerbTokens.length ? '' : previousWorkerbTokens.sort()[previousWorkerbTokens.length - 1]
  
  tokenName = workerbToken
    ? workerbToken.trim().slice(-1) ===
      parseInt(workerbToken.trim().slice(-1), 10).toString()
      ? `${workerbToken.trim().slice(0, -1)}${
          Number(workerbToken.trim().slice(-1)) + 1
        }`
      : `${workerbToken.trim()}1`
    : tokenName;

  click("Generate new token", {
    method: "by_text",
  });

  type(tokenName, "#oauth_access_description", {
    method: "by_query_selector",
  });

  click(".token-scope input", {
    method: "by_query_selector",
  });

  click("Generate token", {
    method: "by_text",
  });

  let newAuthToken = read("#new-oauth-token", {
    method: "by_query_selector",
  });

  if (!newAuthToken) {
    notify("Access token can't be empty", "error", 3000);
  } else {
    setVar("github", [
      {
        name: "accessToken",
        value: newAuthToken,
      },
    ]);
    notify("Access token added successfully", "success", 3000);
    reIndex();
  }
=======
let tokenName = 'workerB'

open('https://github.com/settings/tokens')

const currentUrl = readURL()

if (currentUrl.indexOf('login') === -1) {
	const allTokenNames = readAll('span.token-description a')
	const previousWorkerbTokens = []

	for (const token of allTokenNames) {
		if (token.toLowerCase().indexOf(tokenName) !== -1) {
			previousWorkerbTokens.push(token.trim())
		}
	}

	let workerbToken = !previousWorkerbTokens.length
		? ''
		: previousWorkerbTokens.sort()[previousWorkerbTokens.length - 1]

	tokenName = workerbToken
		? workerbToken.trim().slice(-1) === parseInt(workerbToken.trim().slice(-1), 10).toString()
			? `${workerbToken.trim().slice(0, -1)}${Number(workerbToken.trim().slice(-1)) + 1}`
			: `${workerbToken.trim()}1`
		: tokenName

	click('Generate new token', {
		method: 'by_text',
	})

	type(tokenName, '#oauth_access_description', {
		method: 'by_query_selector',
	})

	click('.token-scope input', {
		method: 'by_query_selector',
	})

	click('Generate token', {
		method: 'by_text',
	})

	let newAuthToken = read('#new-oauth-token', {
		method: 'by_query_selector',
	})

	if (!newAuthToken) {
		notify("Access token can't be empty", 'error', 3000)
	} else {
		setVar('github', [
			{
				name: 'accessToken',
				value: newAuthToken,
			},
		])
		notify('Access token added successfully', 'success', 3000)
		reIndex()
	}
>>>>>>> 7013033a624e88e80a1e7737d453ec3503381a53
} else {
	notify('Please login into your github account first', 'error', 3000)
}
