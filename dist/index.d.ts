import { ConnectorUpdate } from '@web3-react-wan/types';
import { AbstractConnector } from '@web3-react-wan/abstract-connector';
import Web3ProviderEngine from 'web3-provider-engine';
interface WanWalletConnectorArguments {
    chainId: number;
    url: string;
    pollingInterval?: number;
    requestTimeoutMs?: number;
}
export declare class WanWalletConnector extends AbstractConnector {
    private readonly chainId;
    private readonly url;
    private readonly pollingInterval?;
    private readonly requestTimeoutMs?;
    private provider;
    constructor({ chainId, url, pollingInterval, requestTimeoutMs, }: WanWalletConnectorArguments);
    activate(): Promise<ConnectorUpdate>;
    private handleDisconnect;
    getProvider(): Promise<Web3ProviderEngine>;
    getChainId(): Promise<number | string>;
    getAccount(): Promise<null>;
    deactivate(): void;
    close(): Promise<void>;
}
export {};
