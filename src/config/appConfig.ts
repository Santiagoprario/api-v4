interface AppConfigProps {
    app: {
        name: string;
        server: string;
        port: number;
        apiVersion: string;
        secret: string;
    };
    db: {
        host: string;
        database: string;
        username: string;
        password: string;
        port?: number;
        dialect?: string;
        timezone?: string;
        isLogging?: boolean;
    };
}

const AppConfig: AppConfigProps = {
    app: {
        name: process.env.APP_NAME || 'Api',
        server: process.env.SERVER || 'development',
        port: parseInt(<string>process.env.PORT, 10) || 3000,
        apiVersion: process.env.API_VERSION || 'v1',
        secret: process.env.SECRET || 'j!89nKO5as&Js'
    },
    db: {
        host: process.env.DATABASE_URL || '',
        database: process.env.DB_DATABASE || 'Mongodb',
        username: process.env.DB_USERNAME || 'admin',
        password: process.env.DB_PASSWORD || '1234',
        port: parseInt(<string>process.env.DB_PORT, 10) || 5432,
        dialect: process.env.DB_DIALECT || 'postgres',
        timezone: process.env.DB_TIMEZONE || 'Asia/Jakarta',
        isLogging: process.env.DB_LOG === 'true'
    }
};

export default Object.freeze(AppConfig);
