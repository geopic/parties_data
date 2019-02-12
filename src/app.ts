/* tslint:disable:no-var-requires no-console */
// -----------------------------------------------------------------------------
// The Express setup and server start-up file.
// -----------------------------------------------------------------------------
import express, { Request, Response } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import http from 'http';

// ============= //
// Express setup //
// ============= //
const app = express();

app.set('env', 'development');
app.set('port', 3000);
app.set('views', path.join(__dirname, '../src/views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

app.use((err: {message: string, status: number}, req: Request, res: Response, next: () => void) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

// ==================== //
// General server setup //
// ==================== //
const server = http.createServer(app);
server.listen(app.get('port'));

server.on('error', (err: Error) => { throw err; });

server.on('listening', () => console.log(`Listening on port ${app.get('port')}. Press CTRL + C or Command + . to stop.`));

module.exports = app;
