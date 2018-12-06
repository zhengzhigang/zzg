import home from './home';
import account from './account';

export default function(app) {
    app.use(home.routes()).use(home.allowedMethods());
    app.use(account.routes()).use(account.allowedMethods());
}